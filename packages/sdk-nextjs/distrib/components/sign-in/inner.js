"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNerveClient, useNerveConfig } from "../../client";
import ConsentScreen from "../../components/sign-in/consent";
import EHRScreen from "../../components/sign-in/provider-selection";
import { useRouter } from "next/navigation";
export function SignInInner({ initialProviders, initialPermissions, }) {
    const [providers] = useState(initialProviders);
    const [permissions] = useState(initialPermissions);
    const [selectedProvider, setSelectedProvider] = useState(null);
    const client = useNerveClient();
    const config = useNerveConfig();
    const router = useRouter();
    useEffect(() => {
        if (client.isAuthenticated()) {
            router.replace(config.afterRedirectUrl);
        }
    }, [router, client, config]);
    if (selectedProvider && permissions) {
        return (_jsx(ConsentScreen, { provider: selectedProvider, onAccept: () => {
                client.setProvider({
                    fhirUrl: selectedProvider.fhirUrl,
                    authUrl: selectedProvider.authUrl,
                    clientId: selectedProvider.clientId,
                });
                client.authenticate().then((res) => {
                    if (res.state === "unauthenticated") {
                        globalThis.window.location.assign(res.authUrl);
                        return;
                    }
                });
            }, onBack: () => setSelectedProvider(null), healthInfo: permissions }));
    }
    return (_jsx(EHRScreen, { providers: providers, onProviderSelect: (provider) => setSelectedProvider(provider) }));
}
