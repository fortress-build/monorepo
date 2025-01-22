import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnalyticsProvider } from "@nerve-js/analytics";
import { AuthProvider } from "@nerve-js/auth/provider";
import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./providers/theme";
import "../dist/output.css";
export const DesignSystemProvider = ({ children, ...properties }) => (_jsx(ThemeProvider, { ...properties, children: _jsx(AuthProvider, { children: _jsxs(AnalyticsProvider, { children: [_jsx(TooltipProvider, { children: children }), _jsx(Toaster, {})] }) }) }));
