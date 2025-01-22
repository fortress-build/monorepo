"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@nerve-js/ui/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@nerve-js/ui/components/ui/card";
import { Input } from "@nerve-js/ui/components/ui/input";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export default function EHRScreen({ providers, onProviderSelect, }) {
    const [searchQuery, setSearchQuery] = useState("");
    // Add filtering logic
    const filteredProviders = providers.filter((provider) => provider.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return (_jsxs(Card, { className: "w-[32rem] mx-auto mt-16 shadow-none border border-gray-200", children: [_jsxs(CardHeader, { className: "flex flex-col gap-2", children: [_jsx(CardTitle, { children: "Select Your EHR Provider" }), _jsx(Input, { type: "search", className: "h-8 text-sm", placeholder: "Search providers...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) })] }), _jsx(CardContent, { children: _jsx("div", { className: `max-h-[45rem] grid grid-cols-2 gap-1 ${filteredProviders.length > 6 ? "overflow-y-scroll" : "grid-rows-3"}`, children: filteredProviders.map((provider, index) => (_jsxs(Button, { variant: "outline", className: "flex items-center justify-between p-6", onClick: () => onProviderSelect(provider), children: [_jsxs("div", { className: "flex items-center gap-4", children: [provider.icon, _jsx("span", { className: "overflow-hidden text-ellipsis whitespace-nowrap", children: provider.name })] }), _jsx(ArrowUpRight, { className: "w-4 h-4 text-gray-500" })] }, `${provider.name}-${index}`))) }) }), _jsx(CardFooter, { className: "flex justify-center", children: _jsxs("span", { className: "flex items-center text-xs text-gray-500 gap-2", children: ["Powered by Nerve", _jsx(Image, { src: "https://d31yg8dlyykylt.cloudfront.net/logo.svg", alt: "Nerve Logo", width: 16, height: 16 })] }) })] }));
}
