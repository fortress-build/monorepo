import { BinaryResource } from './functions/binary';
import { BodyStructureResource } from './functions/bodyStructure';
import { CarePlanResource } from './functions/carePlan';
import { ConditionResource } from './functions/condition';
import { DiagnosticReportResource } from './functions/diagnosticReport';
import { DocumentReferenceResource } from './functions/documentReference';
import { FlagResource } from './functions/flag';
import { ListResource } from './functions/list';
import { ObservationResource } from './functions/observation';
import { PatientResource } from './functions/patient';
import { ProcedureResource } from './functions/procedure';
import { AdverseEventResource } from './functions/adverseEvent';
import { AccountResource } from './functions/account';
import { AllergyIntoleranceResource } from './functions/allergyIntolerance';
import { AppointmentResource } from './functions/appointment';
import { CdsHooksConditionResource } from './functions/cdsHooksCondition';
import { CdsHooksMedicationRequestResource } from './functions/cdsHooksMedicationRequest';
import { CdsHooksServiceRequestResource } from './functions/cdsHooksServiceRequest';
import { CommunicationResource } from './functions/communication';
import { ConsentResource } from './functions/consent';
import { ContractResource } from './functions/contract';
import { CoverageResource } from './functions/coverage';

import type { Reference } from './models/fhir/Reference';

import { KEYS } from '.';

export type FHIRMetadataRest = {
  mode: string;
  // TODO: Properly type these
  security: unknown;
  resource: unknown[];
};

export type FHIRMetadata = {
  resourceType: 'CapabilityStatement';
  status: string;
  experimental: boolean;
  date: string;
  copyright: string;
  instantiates: string[];
  software: {
    name: string;
    version: string;
    releaseDate: string;
  };
  implementation: {
    description: string;
    url: string;
  };
  fhirVersion: string;
  format: string[];
  rest: FHIRMetadataRest[];
};

export type BeginAuthResult =
  | {
      state: 'authenticated';
      accessToken: string;
    }
  | { state: 'unauthenticated'; authUrl: string };

export type FHIRSession = {
  patient: string;
  token_type: string;
  access_token: string;
  refresh_token?: string;
  id_token: string;
  expires_in: number;
  scope: string;
  state: string;
};

export type PartialFHIRClientConfig = {
  redirectUrl: string;
  scopes?: string[];

  headers?: Record<string, string>;
};

export type FHIRClientConfig = {
  redirectUrl: string;
  scopes: string[];

  headers: Record<string, string>;
};

export type FHIRProviderInfo = {
  authUrl: string;
  fhirUrl: string;
  clientId: string;
  clientSecret?: string;
};

export class Nerve {
  config: FHIRClientConfig;
  provider?: FHIRProviderInfo;

  private metadata?: FHIRMetadata;

  private accessToken?: string;
  private tokenExpiration?: number;

  patient: PatientResource;
  observation: ObservationResource;
  binary: BinaryResource;
  bodyStructure: BodyStructureResource;
  carePlan: CarePlanResource;
  condition: ConditionResource;
  diagnosticReport: DiagnosticReportResource;
  documentReference: DocumentReferenceResource;
  flag: FlagResource;
  list: ListResource;
  procedure: ProcedureResource;
  adverseEvent: AdverseEventResource;
  account: AccountResource;
  allergyIntolerance: AllergyIntoleranceResource;
  appointment: AppointmentResource;
  cdsHooksCondition: CdsHooksConditionResource;
  cdsHooksMedicationRequest: CdsHooksMedicationRequestResource;
  cdsHooksServiceRequest: CdsHooksServiceRequestResource;
  communication: CommunicationResource;
  consent: ConsentResource;
  contract: ContractResource;
  coverage: CoverageResource;
  constructor(config: PartialFHIRClientConfig) {
    this.config = {
      scopes: ['openid', 'fhirUser'],
      headers: {},
      ...config,
    };

    this.patient = new PatientResource(this);
    this.observation = new ObservationResource(this);
    this.binary = new BinaryResource(this);
    this.bodyStructure = new BodyStructureResource(this);
    this.carePlan = new CarePlanResource(this);
    this.condition = new ConditionResource(this);
    this.diagnosticReport = new DiagnosticReportResource(this);
    this.documentReference = new DocumentReferenceResource(this);
    this.flag = new FlagResource(this);
    this.list = new ListResource(this);
    this.procedure = new ProcedureResource(this);
    this.adverseEvent = new AdverseEventResource(this);
    this.account = new AccountResource(this);
    this.allergyIntolerance = new AllergyIntoleranceResource(this);
    this.appointment = new AppointmentResource(this);
    this.cdsHooksCondition = new CdsHooksConditionResource(this);
    this.cdsHooksMedicationRequest = new CdsHooksMedicationRequestResource(this);
    this.cdsHooksServiceRequest = new CdsHooksServiceRequestResource(this);
    this.communication = new CommunicationResource(this);
    this.consent = new ConsentResource(this);
    this.contract = new ContractResource(this);
    this.coverage = new CoverageResource(this);
    if (globalThis.localStorage !== undefined) {
      const provider = localStorage.getItem(KEYS.PROVIDER);
      if (provider !== null) {
        this.setProvider(JSON.parse(provider));
      }

      const authData = localStorage.getItem(KEYS.TOKEN);
      if (authData !== null) {
        const { accessToken, tokenExpiration } = JSON.parse(authData);
        this.restoreToken(accessToken, tokenExpiration);
      }
    }
  }

  private async getMetadata(): Promise<FHIRMetadata> {
    if (this.metadata !== undefined) {
      return this.metadata;
    }

    if (this.provider === undefined) {
      throw new Error('Provider information not set');
    }

    const data = await fetch(`${this.provider.fhirUrl}/metadata`, {
      headers: {
        Accept: 'application/fhir+json',
        ...this.config.headers,
      },
    });

    if (!data.ok || data.status !== 200) {
      throw new Error(
        `Failed to fetch metadata: ${data.status} - ${data.statusText}`
      );
    }

    const metadata = await data.json();

    // TODO: Replace with actual schema validation
    if (metadata.resourceType !== 'CapabilityStatement') {
      throw new Error(
        `Invalid metadata response: Expected 'resourceType' to be 'CapabilityStatement', found '${metadata.resourceType}'`
      );
    }

    this.metadata = metadata;

    return metadata;
  }

  restoreToken(accessToken: string, tokenExpiration: number) {
    this.accessToken = accessToken;
    this.tokenExpiration = tokenExpiration;
    this.config.headers.Authorization = `Bearer ${accessToken}`;
  }

  hasProvider(): boolean {
    return this.provider !== undefined;
  }

  setProvider(provider: FHIRProviderInfo | string) {
    if (typeof provider === 'string') {
      if (provider === 'sandbox') {
        this.provider = {
          authUrl: '',
          fhirUrl: 'http://hapi.fhir.org/baseR4',
          clientId: 'null',
        };
      }
      return;
    }

    this.provider = provider;

    if (globalThis.localStorage !== undefined) {
      globalThis.localStorage.setItem(KEYS.PROVIDER, JSON.stringify(provider));
    }
  }

  async authenticate(): Promise<BeginAuthResult> {
    // TODO: Check auth capabilities from metadata and don't just assume OAuth2
    await this.getMetadata();

    if (this.provider === undefined) {
      throw new Error('Provider information not set');
    }

    const now = Math.floor(Date.now() / 1000);

    if (this.accessToken !== undefined && this.tokenExpiration !== undefined) {
      if (now < this.tokenExpiration) {
        //Checking to see if this is enough of a bug.
        // console.log('Now: ', now);
        // console.log('TokenExpiration: ', this.tokenExpiration);
        return {
          state: 'authenticated',
          accessToken: this.accessToken,
        };
      }

      // TODO: Token expired, refresh
      // throw new Error("unimplemented");
      const refreshToken = localStorage.getItem(KEYS.REFRESH_TOKEN);
      if (refreshToken) {
        try {
          await this.refreshAccessToken(refreshToken);
          if (!this.accessToken) {
            throw new Error('Access token not set after refresh');
          }
          return {
            state: 'authenticated',
            accessToken: this.accessToken,
          };
        } catch (error) {
          console.warn('Failed to refresh token:', error);
          // Continue with new auth flow if refresh fails
        }
      }
    }

    // No token, start auth flow

    // TODO: Get refresh token, store in localStorage
    const request = new URLSearchParams({
      response_type: 'code',
      // state: crypto.randomUUID(),
      aud: this.provider.fhirUrl,
      scope: this.config.scopes.join(' '),
      // scope: "launch/patient patient/*.read openid fhirUser",
      client_id: this.provider.clientId,
      // client_secret: this.config.clientSecret ?? undefined,
      redirect_uri: this.config.redirectUrl,
    });

    return {
      state: 'unauthenticated',
      authUrl: `${this.provider.authUrl}/authorize?${request.toString()}`,
    };
  }

  private async refreshAccessToken(refreshToken: string): Promise<void> {
    if (!this.provider) {
      throw new Error('Provider information not set');
    }

    if (!this.provider.clientSecret) {
      throw new Error('Client secret required for refresh token flow');
    }

    // Create basic auth header
    const credentials = btoa(
      `${encodeURIComponent(this.provider.clientId)}:${encodeURIComponent(this.provider.clientSecret)}`
    );

    const request = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    });

    const response = await fetch(`${this.provider.authUrl}/token`, {
      method: 'POST',
      body: request.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${credentials}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to refresh token: ${response.status} - ${response.statusText}`
      );
    }

    const data: FHIRSession = await response.json();

    this.accessToken = data.access_token;
    this.tokenExpiration = Math.floor(Date.now() / 1000) + data.expires_in;
    this.config.headers.Authorization = `Bearer ${this.accessToken}`;

    // Store the new tokens
    globalThis.localStorage?.setItem(
      KEYS.TOKEN,
      JSON.stringify({
        accessToken: this.accessToken,
        tokenExpiration: this.tokenExpiration,
      })
    );

    if (data.refresh_token) {
      globalThis.localStorage?.setItem(KEYS.REFRESH_TOKEN, data.refresh_token);
    }
  }

  isAuthenticated(): boolean {
    return (
      this.accessToken !== undefined &&
      this.tokenExpiration !== undefined &&
      this.tokenExpiration < Date.now()
    );
  }

  async authCallback(code: string) {
    if (this.provider === undefined) {
      throw new Error('Provider information not set');
    }

    const request = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: this.config.redirectUrl,
      client_id: this.provider.clientId,
    });

    const response = await fetch(`${this.provider.authUrl}/token`, {
      method: 'POST',
      body: request.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to authenticate: ${response.status} - ${response.statusText} (${await response.text()})`
      );
    }

    const data: FHIRSession = await response.json();

    this.accessToken = data.access_token;
    this.tokenExpiration = Math.floor(Date.now() / 1000) + data.expires_in;

    this.config.headers.Authorization = `Bearer ${this.accessToken}`;

    globalThis.localStorage?.setItem(
      KEYS.TOKEN,
      JSON.stringify({
        accessToken: this.accessToken,
        tokenExpiration: this.tokenExpiration,
      })
    );

    // Store refresh token if provided
    if (data.refresh_token) {
      globalThis.localStorage?.setItem(KEYS.REFRESH_TOKEN, data.refresh_token);
    }
  }

  async getToken(): Promise<string> {
    if (
      this.accessToken === undefined ||
      this.tokenExpiration === undefined ||
      this.tokenExpiration < Date.now() / 1000
    ) {
      throw new Error('Not authenticated');
    }

    return this.accessToken;
  }

  async request<T>(path: string, props?: RequestInit): Promise<T> {
    if (this.provider === undefined) {
      throw new Error('Provider information not set');
    }

    const headers = {
      Accept: 'application/fhir+json',
      ...this.config.headers,
      ...props?.headers,
    };

    const response = await fetch(`${this.provider.fhirUrl}/${path}`, {
      method: props?.method,
      body: props?.body,
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} - ${response.statusText}`
      );
    }
    return await response.json();
  }

  async resolveReference<T>(
    ref: Reference<T>,
    { bundleEntryFullUrl }: { bundleEntryFullUrl?: string } = {}
  ): Promise<T> {
    if (this.provider === undefined) {
      throw new Error('Provider information not set');
    }

    let reference = ref.reference;

    // Reference can be one of:
    // 1. An absolute URL
    // 2. A relative URL, relative to the FHIR base url
    //   - If processing a bundle, the bundle entry's `fullUrl` (expected in `bundleEntryFullUrl`)
    // 3. An internal fragment reference (TODO: Implement)
    if (reference.startsWith('http')) {
      // Make absolute URLs relative
      const baseUrl = bundleEntryFullUrl ?? this.provider.fhirUrl;
      if (!reference.startsWith(baseUrl)) {
        throw new Error(`Invalid reference: Expected base ${baseUrl}`);
      }
      reference = reference.slice(baseUrl.length);
    }

    return await this.request<T>(reference, {
      method: 'GET',
    });
  }
}
//if something has a Reference type, then call function to resolve the reference

// Binary.Read (Clinical Notes) (R4)
// Binary.Read (Radiology Results) (R4)
// BodyStructure.Read (Organ) (R4)
// CarePlan.Read (Longitudinal) (R4)
// Condition.Read (Health Concern) (R4)
// Condition.Read (Medical History) (R4)
// Condition.Read (Problens) (R4)
// DiagnosticReport.Read (Results) (R4)
// DocumentReference.Read (Clinical Notes) (R4)
// Flag.Read (Infection) (R4)
// Flag.Read (Patient FYI) (R4)
// List.Read (Allergies) (R4)
// List.Read (Family History) (R4)
// List.Read (Immunizations) (R4)
// List.Read (Medications) (R4)
// List.Read (Problems) (R4)
// Observation.Read (Core Characteristics) (R4)
// Observation.Read (Labs) (R4) - may need to use it for some labs/results
// Observation.Read (Vitals) (R4)
// Procedure.Read (Surgical History) (R4) (
