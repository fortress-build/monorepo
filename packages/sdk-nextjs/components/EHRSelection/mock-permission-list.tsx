import type { PermissionList } from '../nerve-sign-in';

export const mockPermissionList: PermissionList = {
  read: [
    {
      title: 'Demographics and personal information',
      details:
        'Access to basic information including name, date of birth, contact details, and insurance information',
      fhirResources: [
        {
          name: 'Patient',
          description:
            'Contains demographic information about the patient including name, birth date, contact information, and other administrative data',
        },
        {
          name: 'Coverage',
          description:
            "Details about the patient's insurance coverage, including payer information, policy details, and coverage periods",
        },
        {
          name: 'RelatedPerson',
          description:
            "Information about people who are involved in the patient's care, such as family members, guardians, or caregivers",
        },
      ],
    },
    {
      title: 'Medical conditions and diagnoses',
      details:
        'Current and historical medical conditions, diagnoses, and related health issues',
      fhirResources: [
        {
          name: 'Condition',
          description:
            'Clinical conditions, problems, diagnoses, and circumstances that require clinical care or management',
        },
        {
          name: 'DiagnosticReport',
          description:
            'Findings and interpretation of diagnostic tests or assessments',
        },
        {
          name: 'ClinicalImpression',
          description:
            "Healthcare provider's assessment and clinical reasoning about a patient's health condition",
        },
      ],
    },
    {
      title: 'Medications and prescriptions',
      details:
        'Current medications, prescription history, dosage information, and medication allergies',
      fhirResources: [
        {
          name: 'MedicationRequest',
          description:
            'Orders and prescriptions for medications, including dosage instructions and timing',
        },
        {
          name: 'MedicationStatement',
          description:
            'Record of medication usage, including both prescribed and self-reported medications',
        },
        {
          name: 'AllergyIntolerance',
          description:
            'Records of allergies, intolerances, and adverse reactions to medications',
        },
      ],
    },
    {
      title: 'Lab results and vital signs',
      details:
        'Laboratory test results, blood work, vital sign measurements, and other diagnostic findings',
      fhirResources: [
        {
          name: 'Observation',
          description:
            'Measurements, vital signs, and findings from tests and examinations',
        },
        {
          name: 'DiagnosticReport',
          description:
            'Detailed reports of diagnostic tests, including laboratory results and imaging studies',
        },
        {
          name: 'Specimen',
          description:
            'Information about biological samples collected for laboratory testing',
        },
      ],
    },
  ],
  write: [
    {
      title: 'Clinical notes',
      details: 'Ability to create and update clinical documentation',
      fhirResources: [
        {
          name: 'DocumentReference',
          description: 'Create and manage clinical notes and documentation',
        },
        {
          name: 'ClinicalNote',
          description: 'Add and update clinical notes and observations',
        },
      ],
    },
  ],
};
