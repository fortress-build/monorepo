
    [
        {
      name: "Account",
      description: "The Account resource acts as a central record against which charges, payments, and adjustments are applied. It contains information about which parties are responsible for payment of the account."
    },
    {
      name: "ActivityDefinition",
      description: "An ActivityDefinition is a shareable, consumable description of some activity to be performed. It may be used to specify actions to be taken as part of a workflow, order set, or protocol, or it may be used independently as part of a catalog of activities such as orderables."
    },
    {
      name: "AdverseEvent",
      description: "An adverse event is the result of an intervention that caused unintentional harm to a specific subject or group of subjects. Examples include the administration of an incorrect drug or an incorrect dose of a drug causing an adverse reaction, the use of an implanted device that causes an infection, or a biologic used during a research study that causes unanticipated renal failure. These events are characterized by the need to capture cause and effect (although they might not be known at the time of the event), severity, and outcome."
    },
    {
      name: "AllergyIntolerance",
      description: "A record of a clinical assessment of an allergy or intolerance; a propensity, or a potential risk to an individual, to have an adverse reaction on future exposure to the specified substance, or class of substance."
    },
    {
      name: "Appointment",
      description: "Appointment resources are used to provide information about a planned meeting that may be in the future or past. The resource describes a single meeting. Examples include a scheduled surgery, a follow-up for a clinical visit, a scheduled conference call between clinicians to discuss a case, the reservation of a piece of diagnostic equipment for a particular use, etc. The visit scheduled by an appointment may be in person or remote (by phone, video conference, etc.) All that matters is that the time and usage of one or more individuals, locations and/or pieces of equipment is being fully or partially reserved for a designated period of time."
    },
    {
      name: "AppointmentResponse",
      description: "Appointment resources are used to provide information about a planned meeting that may be in the future or past. They may be for a single meeting or for a series of repeating visits. Examples include a scheduled surgery, a follow-up for a clinical visit, a scheduled conference call between clinicians to discuss a case, the reservation of a piece of diagnostic equipment for a particular use, etc. The visit scheduled by an appointment may be in person or remote (by phone, video conference, etc.) All that matters is that the time and usage of one or more individuals, locations and/or pieces of equipment is being fully or partially reserved for a designated period of time."
    },
    {
      name: "AuditEvent",
      description: "A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage."
    },
    {
      name: "Basic",
      description: "A placeholder for any resource-like concept that isn't already defined in the HL7 specification. The Basic resource is intended for use in three circumstances: When an implementer needs a resource concept that is likely to be defined by HL7 in the future but they have not yet done so (due to bandwidth issues, lack of sufficient requirements, lower prioritization, etc.); When there's a need to convey a narrative-only construct that doesn't neatly correspond to one of the other resources, either because it combines aspects of several resources (e.g. Assessment + Plan) or because the allowed content is flexible such that the system can't be totally sure what sort of content might have been included in the narrative text; Other than the circumstances above, this resource will see minimal use. To keep the FHIR specification manageable, it cannot incorporate every site-specific requirement that might be needed in some implementation somewhere. This set of resources likely won't ever be officially defined in HL7."
    },
    {
      name: "Binary",
      description: "A resource that represents the data of a single raw artifact as digital content accessible in its native format. A Binary resource can contain any content, whether text, image, pdf, zip archive, etc."
    },
    {
      name: "BiologicallyDerivedProduct",
      description: "A material substance originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity."
    },
    {
      name: "BodyStructure",
      description: "The BodyStructure resource contains details about the anatomical location of a specimen or body part, including patient information, identifiers, as well as text descriptions and images. It provides for the addition of qualifiers such as laterality and directionality to the anatomic location for those use cases where precoordination of codes is not possible. The BodyStructure resource supports recording and tracking of an anatomic location or structure on a patient outside the context of another resource. For example it can be the target of a Procedure resource or Observation resource."
    },
    {
      name: "Bundle",
      description: "A container for a collection of resources."
    },
    {
      name: "CapabilityStatement",
      description: "A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.",
    {
      name: "CarePlan",
      description: "Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions."
    },
    {
      name: "CareTeam",
      description: "The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient."
    },
    {
      name: "CatalogEntry",
      description: "The CatalogEntry resource (formally known as EntryDefinition) allows additional information specification for items that may be found in the following types of clinical collections, including but not limited to: A pharmacy formulary, a laboratory compendium, a radiology compendium of exams that may be ordered, a dietary nutrition order catalog, a supply charge master, a CDS catalog of knowledge artifacts. The Catalog profile of the Composition resource is used to organize catalog entries."
    },
    {
      name: "ChargeItem",
      description: "The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation."
    },
    {
      name: "ChargeItemDefinition",
      description: "The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system."
    },
    {
      name: "Claim",
      description: "The Claim is used by providers and payors, insurers, to exchange the financial information, and supporting clinical information, regarding the provision of health care services with payors and for reporting to regulatory bodies and firms which provide data analytics. The primary uses of this resource is to support eClaims, the exchange of information relating to the proposed or actual provision of healthcare-related goods and services for patients to their benefit payors, insurers and national health programs, for treatment payment planning and reimbursement."
    },
    {
      name: "ClaimResponse",
      description: "The ClaimResponse resource provides application level adjudication results, or an application level error, which are the result of processing a submitted Claim resource where that Claim may be the functional corollary of a Claim, Predetermination or a Preauthorization. This resource is the only appropriate response to a Claim which a processing system recognizes as a Claim resource."
    },
    {
      name: "ClinicalImpression",
      description: "A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter, but this varies greatly depending on the clinical workflow. This resource is called 'ClinicalImpression' rather than 'ClinicalAssessment' to avoid confusion with the recording of assessment tools such as Apgar score."
    },
    {
      name: "CodeSystem",
      description: "The CodeSystem resource is used to declare the existence of a code system, and its key properties: Identifying URL and version, Description, Copyright, publication date, and other metadata. Some key properties of the code system itself - e.g. whether it exhibits concept permanence, whether it defines a compositional grammar, and whether the codes that it defines are case sensitive. What filters can be used in value sets that use the code system in a ValueSet.compose element. What concept properties are defined by the code system."
    },
    {
      name: "Communication",
      description: "Communication is one of the event resources in the FHIR workflow specification. This resource is a record of a communication even if it is planned or has failed. A communication is a conveyance of information from one entity, a sender, to another entity, a receiver. The sender and receivers may be patients, practitioners, related persons, organizations, or devices."
    },
    {
      name: "CommunicationRequest",
      description: "CommunicationRequest is one of the request resources in the FHIR workflow specification. This resource is a record of a request for a communication to be performed. A communication is a conveyance of information from one entity, a sender, to another entity, a receiver. The requester requests the sender to send the payload to the recipient. The sender and receivers may be patients, practitioners, related persons, organizations, and devices."
    },
    {
      name: "CompartmentDefinition",
      description: "A compartment is a logical grouping of resources which share a common property. Compartments have two principal roles: Function as an access mechanism for finding a set of related resources quickly. Provide a definitional basis for applying access control to resources quickly."
    },
    {
      name: "Composition",
      description: "A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document."
    },
  {
    name: "ConceptMap",
    description: "A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models."
  },
  {
    name: "Condition",
    description: "This resource is used to record detailed information about a condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. The condition could be a point in time diagnosis in context of an encounter, it could be an item on the practitioner’s Problem List, or it could be a concern that doesn’t exist on the practitioner’s Problem List. Often times, a condition is about a clinician's assessment and assertion of a particular aspect of a patient's state of health. It can be used to record information about a disease/illness identified from application of clinical reasoning over the pathologic and pathophysiologic findings (diagnosis), or identification of health issues/situations that a practitioner considers harmful, potentially harmful and may be investigated and managed (problem), or other health issue/situation that may require ongoing monitoring and/or management (health issue/concern)."
  },
  {
    name: "Consent",
    description: "The purpose of this Resource is to be used to express a Consent regarding Healthcare. There are four anticipated uses for the Consent Resource, all of which are written or verbal agreements by a healthcare consumer [grantor] or a personal representative, made to an authorized entity [grantee] concerning authorized or restricted actions with any limitations on purpose of use, and handling instructions to which the authorized entity must comply: Privacy Consent Directive: Agreement to collect, access, use or disclose (share) information. Medical Treatment Consent Directive: Consent to undergo a specific treatment (or record of refusal to consent). Research Consent Directive: Consent to participate in research protocol and information sharing required. Advance Care Directives: Consent to instructions for potentially needed medical treatment (e.g. DNR)."
  },
  {
    name: "Contract",
    description: "Contracts are promises or understandings that are enforceable by law in case of any violation or breech by any involved party or organization. A Contract instance may be a unilateral mandate such as a policy, or a unilateral, bilateral, or multilateral agreement, which impacts the influence of the parties over the terms of the agreement, and the burdens and risks incurred."
  },
  {
    name: "Coverage",
    description: "Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment."
  },
  {
    name: "CoverageEligibilityRequest",
    description: "The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy."
  },
  {
    name: "CoverageEligibilityResponse",
    description: "The CoverageEligibilityResponse resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. It combines key information from a payor as to whether a Coverage is in-force, and optionally the nature of the Policy benefit details as well as the ability for the insurer to indicate whether the insurance provides benefits for requested types of services or requires preauthorization and if so what supporting information may be required."
  },
  {
    name: "DetectedIssue",
    description: "Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc."
  },
  {
    name: "Device",
    description: "A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device."
  },
  {
    name: "DeviceDefinition",
    description: "The characteristics, operational status and capabilities of a medical-related component of a medical device."
  },
  {
    name: "DeviceMetric",
    description: "Describes a measurement, calculation or setting capability of a medical device."
  },
  {
    name: "DeviceRequest",
    description: "Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker."
  },
  {
    name: "DeviceUseStatement",
    description: "A record of a device being used by a patient where the record is the result of a report from the patient or another clinician."
  },
  {
    name: "DiagnosticReport",
    description: "The findings and interpretation of diagnostic tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports."
  },
  {
    name: "DocumentManifest",
    description: "A collection of documents compiled for a purpose together with metadata that applies to the collection."
  },
  {
    name: "DocumentReference",
    description: "A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text."
  },
  {
    name: "EffectEvidenceSynthesis",
    description: "The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies."
  },
  {
    name: "Encounter",
    description: "An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient."
  },
  {
    name: "Endpoint",
    description: "The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information."
  },
  {
    name: "EnrollmentRequest",
    description: "The EnrollmentRequest resource allows for the addition and removal of plan subscribers and their dependents to health insurance coverage."
  },
  {
    name: "EnrollmentResponse",
    description: "This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource."
  },
  {
    name: "EpisodeOfCare",
    description: "An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time."
  },
  {
    name: "EventDefinition",
    description: "The EventDefinition provides a reusable description of an event. The resource supports describing different kinds of events, including named events, periodic events, and data-based events. For each of these, the resource also supports a formal description of the event. For example, a 'monitor-emergency-admissions' event can be a named event, but also provide a formal description of the event as monitoring for encounters that occur in emergency department locations."
  },
  {
    name: "Evidence",
    description: "The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about."
  },
  {
    name: "EvidenceVariable",
    description: "The scope of the EvidenceVariable resource is to describe a 'PICO' element that knowledge (evidence, assertion, recommendation) is about. PICO stands for: Population - the population within which exposures and outcomes are being considered Intervention - the conditional state or exposure state being described for which one is expressing the risk of or effect on an outcome Comparison - the alternative conditional state or alternative exposure state when one is comparing states for the effect on an outcome Outcome - the result or effect of an intervention or exposure in a population PICO (and its variants like PECO or PICOT) is a universal acronym used in evidence-based medicine communities to clearly express research questions and evidence findings. The EvidenceVariable resource allows expression of the components of a PICO question in codeable and reusable formats."
  },
  {
    name: "ExampleScenario",
    description: "Description not available"
  },
  {
    name: "ExplanationOfBenefit",
    description: "This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided."
  },
  {
    name: "FamilyMemberHistory",
    description: "Significant health conditions for a person related to the patient relevant in the context of care for the patient."
  },
  {
    name: "Flag",
    description: "Prospective warnings of potential issues when providing care to the patient."
  },
  {
    name: "Goal",
    description: "Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc."
  },
  {
    name: "GraphDefinition",
    description: "A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set."
  },
  {
    name: "Group",
    description: "Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization."
  },
  {
    name: "GuidanceResponse",
    description: "A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken."
  },
  {
    name: "HealthcareService",
    description: "The details of a healthcare service available at a location."
  },
  {
    name: "ImagingStudy",
    description: "Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context. A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities."
  },
  {
    name: "Immunization",
    description: "Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party."
  },
  {
    name: "ImmunizationEvaluation",
    description: "Describes a comparison of an immunization event against published recommendations to determine if the administration is 'valid' in relation to those recommendations."
  },
  {
    name: "ImmunizationRecommendation",
    description: "A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification."
  },
  {
    name: "ImplementationGuide",
    description: "A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts."
  },
  {
    name: "InsurancePlan",
    description: "Details of a Health Insurance product/plan provided by an organization."
  },
  {
    name: "Invoice",
    description: "Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose."
  },
    {
      name: "Library",
      description: "The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets."
    },
    {
      name: "Linkage",
      description: "Identifies two or more records (resource instances) that refer to the same real-world 'occurrence'."
    },
    {
      name: "List",
      description: "The List resource is a flat, possibly ordered collection of records. List resources are used in many places, including allergies, medications, alerts, family history, medical history, etc. List resources can be used to support patient-specific clinical lists as well as lists that manage workflows such as tracking patients, managing teaching cases, etc. Resources supported by the List resource can be homogeneous – consisting of only one type of resource (e.g. allergy lists) as well as heterogeneous – containing a variety of resources (e.g. a problem list including Conditions, AllergyIntolerances, recent Procedures, etc.)."
    },
    {
      name: "Location",
      description: "A Location includes both incidental locations (a place which is used for healthcare without prior designation or authorization) and dedicated, formally appointed locations. Locations may be private, public, mobile or fixed and scale from small freezers to full hospital buildings or parking garages."
    },
    {
      name: "Measure",
      description: "The Measure resource represents a structured, computable definition of a health-related measure such as a clinical quality measure, public health indicator, or population analytics measure. A quality measure is a quantitative tool to assess the performance of an individual or organization with respect to a specified process or outcome via the measurement of actions, processes, or outcomes of clinical care. Quality measures are often derived from clinical guidelines and are designed to determine whether the appropriate care has been provided given a set of clinical criteria and an evidence base."
    },
    {
      name: "MeasureReport",
      description: "The MeasureReport resource represents the results of calculating a measure for a specific subject or group of subjects. The $evaluate-measure operation of the Measure resource is defined to return a MeasureReport. The resource is capable of representing three different levels of report: individual, subject-list, and summary."
    },
    {
      name: "Media",
      description: "A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference."
    },
    {
      name: "Medication",
      description: "This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use."
    },
    {
      name: "MedicationAdministration",
      description: "Describes the event of a patient consuming or otherwise being administered a medication. This may be as simple as swallowing a tablet or it may be a long running infusion. Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner."
    },
    {
      name: "MedicationDispense",
      description: "Indicates that a medication product is to be or has been dispensed for a named person/patient. This includes a description of the medication product (supply) provided and the instructions for administering the medication. The medication dispense is the result of a pharmacy system responding to a medication order."
    },
    {
      name: "MedicationKnowledge",
      description: "Information about a medication that is used to support knowledge."
    },
    {
      name: "MedicationRequest",
      description: "An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called 'MedicationRequest' rather than 'MedicationPrescription' or 'MedicationOrder' to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns."
    },
    {
      name: "MedicationStatement",
      description: "A record of a medication that is being consumed by a patient. A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future. The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician. A common scenario where this information is captured is during the history taking process during a patient visit or stay. The medication information may come from sources such as the patient's memory, from a prescription bottle, or from a list of medications the patient, clinician or other party maintains."
    },
    {
      name: "MedicinalProduct",
      description: "Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use)."
    },
    {
      name: "MedicinalProductAuthorization",
      description: "The regulatory authorization of a medicinal product."
    },
    {
      name: "MedicinalProductContraindication",
      description: "The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes."
    },
    {
      name: "MedicinalProductIndication",
      description: "Indication for the Medicinal Product."
    },
    {
      name: "MedicinalProductIngredient",
      description: "An ingredient of a manufactured item or pharmaceutical product."
    },
    {
      name: "MedicinalProductInteraction",
      description: "The interactions of the medicinal product with other medicinal products, or other forms of interactions."
    },
    {
      name: "MedicinalProductManufactured",
      description: "The manufactured item as contained in the packaged medicinal product."
    },
    {
      name: "MedicinalProductPackaged",
      description: "A medicinal product in a container or package."
    },
    {
      name: "MedicinalProductPharmaceutical",
      description: "A pharmaceutical product described in terms of its composition and dose form."
    },
    {
      name: "MedicinalProductUndesirableEffect",
      description: "Describe the undesirable effects of the medicinal product."
    },
    {
      name: "MessageDefinition",
      description: "Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted."
    },
    {
      name: "MessageHeader",
      description: "The header for a message exchange that is either requesting or responding to an action. The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle."
    },
    {
      name: "MolecularSequence",
      description: "The MolecularSequence resource is designed to describe an atomic sequence which contains the alignment sequencing test result and multiple variations. Atomic sequences can be connected by link element and they will lead to sequence graph. By this method, a sequence can be reported. Complete genetic sequence information, of which specific genetic variations are a part, is reported by reference to the GA4GH repository. Thus, the FHIR MolecularSequence resource avoids large genomic payloads in a manner analogous to how the FHIR ImagingStudy resource references large images maintained in other systems."
    },
    {
      name: "NamingSystem",
      description: "A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc. Represents a 'System' used within the Identifier and Coding data types."
    },
    {
      name: "NutritionOrder",
      description: "A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident."
    },
    {
      name: "Observation",
      description: "Measurements and simple assertions made about a patient, device or other subject."
    },
    {
      name: "ObservationDefinition",
      description: "Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service."
    },
    {
      name: "OperationDefinition",
      description: "A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction)."
    },
    {
      name: "OperationOutcome",
      description: "A collection of error, warning, or information messages that result from a system action."
    },
    {
      name: "Organization",
      description: "A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action. Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc."
    },
    {
      name: "OrganizationAffiliation",
      description: "Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship."
    },
    {
      name: "Parameters",
      description: "This resource is a non-persisted resource used to pass information into and back from an operation. It has no other use, and there is no RESTful endpoint associated with it."
    },
    {
      name: "Patient",
      description: "Demographics and other administrative information about an individual or animal receiving care or other health-related services."
    },
    {
      name: "PaymentNotice",
      description: "This resource provides the status of the payment for goods and services rendered, and the request and response resource references."
    },
    {
      name: "PaymentReconciliation",
      description: "This resource provides the details including amount of a payment and allocates the payment items being paid."
    },
    {
      name: "Person",
      description: "Demographics and administrative information about a person independent of a specific health-related context."
    },
    {
      name: "PlanDefinition",
      description: "This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols."
    },
    {
      name: "Practitioner",
      description: "A person who is directly or indirectly involved in the provisioning of healthcare."
    },
    {
      name: "PractitionerRole",
      description: "A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time."
    },
    {
      name: "Procedure",
      description: "An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy."
    },
    {
      name: "Provenance",
      description: "Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance."
    },
    {
      name: "Questionnaire",
      description: "A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection."
    },
    {
      name: "QuestionnaireResponse",
      description: "A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to."
    },
    {
      name: "RelatedPerson",
      description: "Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process."
    },
        {
            name: "RequestGroup",
            description: "A group of related requests that can be used to capture intended activities that have inter-dependencies such as 'give this medication after that one'."
        },
        {
            name: "ResearchDefinition",
            description: "The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about."
        },
        {
            name: "ResearchElementDefinition",
            description: "The ResearchElementDefinition resource describes a 'PICO' element that knowledge (evidence, assertion, recommendation) is about."
        },
        {
            name: "ResearchStudy",
            description: "A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge. This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques. A ResearchStudy involves the gathering of information about human or animal subjects."
        },
        {
            name: "ResearchSubject",
            description: "A physical entity which is the primary unit of operational and/or administrative interest in a study."
        },
        {
            name: "RiskAssessment",
            description: "An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome."
        },
        {
            name: "RiskEvidenceSynthesis",
            description: "The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies."
        },
        {
            name: "Schedule",
            description: "A container for slots of time that may be available for booking appointments."
        },
        {
            name: "SearchParameter",
            description: "A search parameter that defines a named search item that can be used to search/filter on a resource."
        },
        {
            name: "ServiceRequest",
            description: "A record of a request for service such as diagnostic investigations, treatments, or operations to be performed."
        },
        {
            name: "Slot",
            description: "A slot of time on a schedule that may be available for booking appointments."
        },
        {
            name: "Specimen",
            description: "A sample to be used for analysis."
        },
        {
            name: "SpecimenDefinition",
            description: "A kind of specimen with associated set of requirements."
        },
        {
            name: "StructureDefinition",
            description: "A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types."
        },
        {
            name: "StructureMap",
            description: "A Map of relationships between 2 structures that can be used to transform data."
        },
        {
            name: "Subscription",
            description: "The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined 'channel' so that another system can take an appropriate action."
        },
        {
            name: "Substance",
            description: "A homogeneous material with a definite composition."
        },
        {
            name: "SubstancePolymer",
            description: "No definition available at this time."
        },
        {
            name: "SubstanceProtein",
            description: "A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators."
        },
        {
            name: "SubstanceReferenceInformation",
            description: "No definition available at this time."
        },
        {
            name: "SubstanceSpecification",
            description: "The detailed description of a substance, typically at a level beyond what is used for prescribing."
        },
        {
            name: "SubstanceSourceMaterial",
            description: "Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers (e.g., starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level."
        },
        {
            name: "SupplyDelivery",
            description: "The scope of the supply resource is for supplies used in the healthcare process. This includes supplies specifically used in the treatment of patients as well as supply movement within an institution (transport a set of supplies from materials management to a service unit (nurse station). This resource does not include the provisioning of transportation services."
        },
        {
            name: "SupplyRequest",
            description: "A record of a request for a medication, substance or device used in the healthcare setting."
        },
        {
            name: "Task",
            description: "A task to be performed."
        },
        {
            name: "TerminologyCapabilities",
            description: "A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation."
        },
        {
            name: "TestReport",
            description: "A summary of information based on the results of executing a TestScript."
        },
        {
            name: "TestScript",
            description: "A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification."
        },
        {
            name: "ValueSet",
            description: "A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between CodeSystem definitions and their use in coded elements."
        },
        {
            name: "VerificationResult",
            description: "Describes validation requirements, source(s), status and dates for one or more elements."
        },
        {
            name: "VisionPrescription",
            description: "An authorization for the provision of glasses and/or contact lenses to a patient."
        }
    ]