import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider as NextThemeProvider } from 'next-themes';
export const ThemeProvider = ({ children, ...properties }) => (_jsx(NextThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, disableTransitionOnChange: true, ...properties, children: children }));
