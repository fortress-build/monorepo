import { Nerve } from "@nerve-js/client";
import type React from "react";
export interface NerveNextConfig {
    afterRedirectUrl: string;
    signInUrl: string;
}
export declare function NerveProvider({ children, redirectUrl, afterRedirectUrl, signInUrl, scopes, }: {
    children: React.ReactNode;
    redirectUrl: string;
    afterRedirectUrl: string;
    signInUrl: string;
    scopes?: string[];
}): import("react/jsx-runtime").JSX.Element;
export declare function useNerveClient(): Nerve;
export declare function useNerveConfig(): NerveNextConfig;
//# sourceMappingURL=client.d.ts.map