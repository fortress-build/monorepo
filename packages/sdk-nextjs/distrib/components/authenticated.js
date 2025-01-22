"use client";
import { useRouter } from "next/navigation";
import { useNerveClient, useNerveConfig } from "../client";
import { useEffect, useState } from "react";
export function Authenticated({ children, fallback, }) {
    const client = useNerveClient();
    const config = useNerveConfig();
    const router = useRouter();
    const [content, setContent] = useState(fallback);
    useEffect(() => {
        if (client.isAuthenticated()) {
            setContent(children);
        }
        else {
            router.replace(config.signInUrl);
        }
    }, [client, router, config, children]);
    return content;
}
