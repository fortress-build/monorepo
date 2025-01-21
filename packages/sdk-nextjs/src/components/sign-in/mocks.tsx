import Image from "next/image";
import type { PermissionList, EHRProvider } from "../../components/sign-in";

export const mockPermissionList: PermissionList = {
  read: [
    {
      title: "Demographics and personal information",
      details:
        "Access to basic information including name, date of birth, contact details, and insurance information",
      fhirResources: [
        {
          name: "Patient",
          description:
            "Contains demographic information about the patient including name, birth date, contact information, and other administrative data",
        },
        {
          name: "Coverage",
          description:
            "Details about the patient's insurance coverage, including payer information, policy details, and coverage periods",
        },
        {
          name: "RelatedPerson",
          description:
            "Information about people who are involved in the patient's care, such as family members, guardians, or caregivers",
        },
      ],
    },
    {
      title: "Medical conditions and diagnoses",
      details:
        "Current and historical medical conditions, diagnoses, and related health issues",
      fhirResources: [
        {
          name: "Condition",
          description:
            "Clinical conditions, problems, diagnoses, and circumstances that require clinical care or management",
        },
        {
          name: "DiagnosticReport",
          description:
            "Findings and interpretation of diagnostic tests or assessments",
        },
        {
          name: "ClinicalImpression",
          description:
            "Healthcare provider's assessment and clinical reasoning about a patient's health condition",
        },
      ],
    },
    {
      title: "Medications and prescriptions",
      details:
        "Current medications, prescription history, dosage information, and medication allergies",
      fhirResources: [
        {
          name: "MedicationRequest",
          description:
            "Orders and prescriptions for medications, including dosage instructions and timing",
        },
        {
          name: "MedicationStatement",
          description:
            "Record of medication usage, including both prescribed and self-reported medications",
        },
        {
          name: "AllergyIntolerance",
          description:
            "Records of allergies, intolerances, and adverse reactions to medications",
        },
      ],
    },
    {
      title: "Lab results and vital signs",
      details:
        "Laboratory test results, blood work, vital sign measurements, and other diagnostic findings",
      fhirResources: [
        {
          name: "Observation",
          description:
            "Measurements, vital signs, and findings from tests and examinations",
        },
        {
          name: "DiagnosticReport",
          description:
            "Detailed reports of diagnostic tests, including laboratory results and imaging studies",
        },
        {
          name: "Specimen",
          description:
            "Information about biological samples collected for laboratory testing",
        },
      ],
    },
  ],
  write: [
    {
      title: "Clinical notes",
      details: "Ability to create and update clinical documentation",
      fhirResources: [
        {
          name: "DocumentReference",
          description: "Create and manage clinical notes and documentation",
        },
        {
          name: "ClinicalNote",
          description: "Add and update clinical notes and observations",
        },
      ],
    },
  ],
};

export const mockEHRProviders: EHRProvider[] = [
  {
    name: "Epic",
    authUrl: "https://fhir.epic.com/interconnect-fhir-oauth/oauth2",
    fhirUrl: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4",
    clientId: "0d804090-4ae2-49af-b49d-deb2cf7cd35d",
    icon: (
      <Image
        src="https://d31yg8dlyykylt.cloudfront.net/ehrs/Epic.svg"
        alt="Epic"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Cerner",
    authUrl: "https://fhir.cerner.com/auth",
    fhirUrl: "https://fhir.cerner.com/r4",
    clientId: "",
    icon: (
      <Image
        src="https://d31yg8dlyykylt.cloudfront.net/ehrs/Cerner.svg"
        alt="Cerner"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Athena Health",
    authUrl: "https://api.athenahealth.com/oauth",
    fhirUrl: "https://api.athenahealth.com/fhir/r4",
    clientId: "",
    icon: (
      <Image
        src="https://d31yg8dlyykylt.cloudfront.net/ehrs/AthenaHealth.svg"
        alt="Athena Health"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "AllScripts",
    authUrl: "https://allscripts.com/auth",
    fhirUrl: "https://allscripts.com/fhir/r4",
    clientId: "",
    icon: (
      <Image
        src="https://d31yg8dlyykylt.cloudfront.net/ehrs/Allscripts.svg"
        alt="AllScripts"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "NextGen Healthcare",
    authUrl: "https://nextgen.com/auth",
    fhirUrl: "https://nextgen.com/fhir/r4",
    clientId: "",
    icon: (
      <Image
        src="https://d31yg8dlyykylt.cloudfront.net/ehrs/NextGen.svg"
        alt="NextGen Healthcare"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "eClinicalWorks",
    authUrl: "https://eclinicalworks.com/auth",
    fhirUrl: "https://eclinicalworks.com/fhir/r4",
    clientId: "",
    icon: (
      <Image
        src="https://d31yg8dlyykylt.cloudfront.net/ehrs/eClinicalWorks.svg"
        alt="eClinicalWorks"
        width={24}
        height={24}
      />
    ),
  },
  // Add more providers as needed
];
