import type { Resource } from './models/fhir/Resource';

/*
//This is a function that takes in a JSON in a Searchset schema (for Search queries) and returns an array of the relevant Reference (i.e Patients[])

Sample JSON searchset:
{
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 1,
    "link": [
        {
            "relation": "self",
            "url": "https://hostname/instance/api/FHIR/R4/CarePlan?patient=eeIncfrCBjMQ5elSQx.I0zw3&category=38717003"
        }
    ],
    "entry": [
        {
            "link": [
                {
                    "relation": "self",
                    "url": "https://hostname/instance/api/FHIR/R4/CarePlan/ebOCg1uG759-qC5tMRYro0NL9EWqPcmUcTBRuekI6fIk3"
                }
            ],
            "fullUrl": "https://hostname/instance/api/FHIR/R4/CarePlan/ebOCg1uG759-qC5tMRYro0NL9EWqPcmUcTBRuekI6fIk3",
            "resource": {
                "resourceType": "CarePlan",
                "id": "ebOCg1uG759-qC5tMRYro0NL9EWqPcmUcTBRuekI6fIk3",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Active Problems</h1><ul><li>Type 1 diabetes mellitus</li><li>Chronic back pain</li></ul><h1>Goals</h1><ul><li>Weight (lb) &lt; 200 lb</li></ul><h1>Upcoming Procedure Orders</h1><table><tr><th>Procedure Order</th><th>Start</th><th>End</th><th>Status</th></tr><tr><td>X-RAY ABDOMEN 2 VW</td><td>N/A</td><td>N/A</td><td>Not Started</td></tr></table></div>"
                },
                "status": "active",
                "intent": "plan",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/us/core/CodeSystem/careplan-category",
                                "code": "assess-plan",
                                "display": "Assessment and Plan of Treatment"
                            }
                        ],
                        "text": "Assessment and Plan of Treatment"
                    },
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "38717003",
                                "display": "Longitudinal"
                            }
                        ],
                        "text": "Longitudinal"
                    }
                ],
                "subject": {
                    "reference": "Patient/eeIncfrCBjMQ5elSQx.I0zw3",
                    "display": "Test, Patient"
                },
                "addresses": [
                    {
                        "reference": "Condition/eGPLML1iXAk9RjEcE.SJ80gBxuNRI9.YnRHlOxDzGryw3",
                        "display": "Type 1 diabetes mellitus"
                    },
                    {
                        "reference": "Condition/eL35aP.iBX7duRU41HjXvZM49E0L2NeP8eH9LiCtVR.Q3",
                        "display": "Chronic back pain"
                    }
                ],
                "goal": [
                    {
                        "reference": "Goal/em9zZhdUaugZOu.ptOJUhKg3",
                        "display": "Weight (lb) < 200 lb"
                    }
                ],
                "activity": [
                    {
                        "detail": {
                            "kind": "ServiceRequest",
                            "code": {
                                "text": "X-RAY ABDOMEN 2 VW"
                            },
                            "status": "not-started",
                            "doNotPerform": false
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        }
    ]
}
Sample output:

[]
*/

export function search2Array<T extends Resource>(
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  object: any,
  resource: T
): T[] {
  // Check if the object is a Bundle searchset
  if (object.resourceType !== 'Bundle' || object.type !== 'searchset') {
    throw new Error('Input must be a FHIR Bundle searchset');
  }

  // Extract and map the resources from the entries
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return object.entry?.map((entry: any) => entry.resource as T) || [];
}
