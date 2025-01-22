"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Nerve } from "@nerve-js/client";
import { createContext, useContext } from "react";
const NerveGlobalContext = createContext(undefined);
export function NerveProvider({ children, redirectUrl, afterRedirectUrl, signInUrl, scopes = ["openid", "fhirUser", "user/*.*"], }) {
    return (_jsx(NerveGlobalContext.Provider, { value: {
            client: new Nerve({
                redirectUrl,
                scopes,
            }),
            config: {
                afterRedirectUrl,
                signInUrl,
            },
        }, children: children }));
}
export function useNerveClient() {
    const context = useContext(NerveGlobalContext);
    if (context === undefined) {
        throw new Error("useNerveClient must be used within a NerveProvider");
    }
    return context.client;
}
export function useNerveConfig() {
    const context = useContext(NerveGlobalContext);
    if (context === undefined) {
        throw new Error("useNerveConfig must be used within a NerveProvider");
    }
    return context.config;
}
