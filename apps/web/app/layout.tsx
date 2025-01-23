import "@nerve-js/ui/styles/globals.css";
import "./styles/web.css";
import { DesignSystemProvider } from "@nerve-js/ui";
import { fonts } from "@nerve-js/ui/lib/fonts";
import { cn } from "@nerve-js/ui/lib/utils";
import type { ReactNode } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import "./global.css";

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html
    lang="en"
    className={cn(fonts, "scroll-smooth")}
    suppressHydrationWarning
  >
    <body>
      <DesignSystemProvider>
        <Header />
        {children}
        <Footer />
      </DesignSystemProvider>
    </body>
  </html>
);

export default RootLayout;
