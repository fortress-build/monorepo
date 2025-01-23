import "@repo/ui/styles/globals.css";
import "./styles/web.css";
import { DesignSystemProvider } from "@repo/ui";
import { fonts } from "@repo/ui/lib/fonts";
import { cn } from "@repo/ui/lib/utils";
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
