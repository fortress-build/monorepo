import { camelToKebab } from "../camel2kebab";
import type { Nerve } from "..";
import type { Parameters } from "../models/fhir/Parameters";
import type { Patient } from "../models/fhir/Patient";
import { search2Array } from "@/modelMapping";

type BaseSearchParams = {
  address?: string;
  legalSex?: string;
  ownName?: string;
  ownPrefix?: string;
  partnerName?: string;
  partnerPrefix?: string;
};

type IdentifierSearch = BaseSearchParams & {
  identifier: string;
};

type PersonalInfoSearch = BaseSearchParams & {
  given: string;
  family: string;
  birthdate: string;
};

type AlternativeSearch = BaseSearchParams & {
  name: string;
  gender: string;
  telecom: string;
};

interface MatchParameters {
  resource: Patient;
  onlySingleMatch?: boolean;
  onlyCertainMatches?: boolean;
  count?: number;
}

export class PatientResource {
  private client: Nerve;

  constructor(client: Nerve) {
    this.client = client;
  }

  async read(id: string): Promise<Patient> {
    return await this.client.request(`Patient/${id}`);
  }

  async create(data: Patient): Promise<void> {
    await this.client.request("Patient", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async match(params: MatchParameters): Promise<unknown /* Bundle */> {
    const parameters: Parameters = {
      resourceType: "Parameters",
      parameter: [
        {
          name: "resource",
          resource: params.resource,
        },
      ],
    };

    //MAY NEED TO CONVERT THESE TO STRING
    if (params.count !== undefined) {
      parameters.parameter.push({
        name: "count",
        valueInteger: params.count,
      });
    }

    if (params.onlyCertainMatches !== undefined) {
      parameters.parameter.push({
        name: "onlyCertainMatches",
        valueBoolean: params.onlyCertainMatches,
      });
    }

    if (params.onlySingleMatch !== undefined) {
      parameters.parameter.push({
        name: "onlySingleMatch",
        valueBoolean: params.onlySingleMatch,
      });
    }

    const result = await this.client.request("Patient/$match", {
      method: "POST",
      body: JSON.stringify(parameters),
    });
    
    return search2Array(result, {} as Patient);
  }

  async search(
    params: IdentifierSearch | PersonalInfoSearch | AlternativeSearch,
  ): Promise<Patient[]> {
    const kebabParams = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [camelToKebab(key), value]),
    );
    const result = await this.client.request(
      `Patient?${new URLSearchParams(kebabParams)}`,
      {
        method: "GET",
      },
    );

    return search2Array(result, {} as Patient)
  }
}
