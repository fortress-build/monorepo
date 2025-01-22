import { type JSX } from "react";
export interface EHRProvider {
    name: string;
    authUrl: string;
    fhirUrl: string;
    clientId: string;
    icon: JSX.Element;
}
export interface Permission {
    title: string;
    details: string;
    fhirResources: {
        name: string;
        description: string;
    }[];
}
export interface PermissionList {
    read: Permission[];
    write: Permission[];
}
export declare function NerveSignIn(): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map