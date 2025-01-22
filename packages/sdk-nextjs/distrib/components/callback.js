"use client";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useNerveClient, useNerveConfig } from "../client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
export function NerveCallback({ children }) {
    const client = useNerveClient();
    const config = useNerveConfig();
    const router = useRouter();
    const params = useSearchParams();
    useEffect(() => {
        const code = params.get("code");
        if (code !== null && code !== "") {
            client.authCallback(code).then(() => {
                router.replace(config.afterRedirectUrl);
            });
        }
    }, [client, params, router, config]);
    if (params.get("code") === null) {
        return _jsx("div", { children: "Something went wrong: No authentication code found" });
    }
    return _jsx(_Fragment, { children: children });
}
