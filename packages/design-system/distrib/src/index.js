import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./providers/theme";
import "../distrib/output.css";
export const DesignSystemProvider = ({ children, ...properties }) => (_jsxs(ThemeProvider, { ...properties, children: [_jsx(TooltipProvider, { children: children }), _jsx(Toaster, {})] }));
