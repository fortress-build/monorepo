import React from "react";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

const onboardingSteps = [
  {
    label: "Verify Email",
    description: "Confirm your email address to secure your account",
  },
  {
    label: "Complete Due Risk Diligence",
    description: "Submit required documentation for risk assessment",
  },
  {
    label: "Complete Security Diligence",
    description: "Review and implement security requirements",
  },
];

interface OnboardingStepProps {
  label: string;
  description: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const OnboardingStep: React.FC<OnboardingStepProps> = ({
  label,
  description,
  isActive,
  isCompleted,
  onClick,
}) => (
  // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
  <div
    className={`flex items-start space-x-3 ${
      isActive ? "text-primary" : "text-gray-600"
    } cursor-pointer hover:bg-gray-50 p-4 rounded-md transition-colors border border-gray-200`}
    onClick={onClick}
  >
    <div className="mt-1">
      {isCompleted ? (
        <CheckCircle2 className="w-5 h-5 text-primary" />
      ) : (
        <Circle
          className={`w-5 h-5 ${isActive ? "text-primary" : "text-gray-400"}`}
        />
      )}
    </div>
    <div>
      <h3 className="font-bold">{label}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

interface OnboardingStepsProps {
  activeStep?: number;
  completed?: number[];
  onStepClick?: (stepIndex: number) => void;
}

export const OnboardingSteps: React.FC<OnboardingStepsProps> = ({
  activeStep = 0,
  completed = [],
  onStepClick = () => {},
}) => {
  const totalSteps = onboardingSteps.length;
  const completedSteps = completed.length;
  const progress = (completedSteps / totalSteps) * 100;

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Request Production Access</h2>
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </div>
        <span className="text-sm text-gray-500">
          {completedSteps} of {totalSteps} Complete
        </span>
      </div>

      <div className="h-2 bg-gray-100 rounded-full mb-6">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex flex-col space-y-4">
        {onboardingSteps.map((step, index) => (
          <OnboardingStep
            key={step.label}
            label={step.label}
            description={step.description}
            isActive={index === activeStep}
            isCompleted={completed.includes(index)}
            onClick={() => onStepClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OnboardingSteps;
