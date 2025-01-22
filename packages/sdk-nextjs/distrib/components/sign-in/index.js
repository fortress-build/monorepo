"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { SignInInner } from "../../components/sign-in/inner";
import { mockEHRProviders, mockPermissionList, } from "../../components/sign-in/mocks";
import { Loader } from "lucide-react";
async function getEHRProviders() {
    return mockEHRProviders;
}
async function getPermissionList() {
    return mockPermissionList;
}
export function NerveSignIn() {
    const [loading, setLoading] = useState(true);
    const [providers, setProviders] = useState(null);
    const [permissions, setPermissions] = useState(null);
    Promise.all([getEHRProviders(), getPermissionList()]).then(([providers, permissions]) => {
        setProviders(providers);
        setPermissions(permissions);
        setLoading(false);
    });
    return (_jsx("div", { className: "flex flex-row justify-center items-center", children: loading ? (_jsx("div", { className: "w-full h-full", children: _jsx(Loader, { className: "animate-spin w-5" }) })) : (_jsx(SignInInner, { initialProviders: providers ?? [], initialPermissions: {
                read: permissions?.read ?? [],
                write: permissions?.write ?? [],
            } })) }));
}
