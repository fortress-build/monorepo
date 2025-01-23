import "@repo/ui/styles/globals.css";
import { DesignSystemProvider } from "@repo/ui";
import { fonts } from "@repo/ui/lib/fonts";
import type { ReactNode } from "react";
import Providers from "./providers";

type RootLayoutProperties = {
  readonly children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProperties) {
  return (
    <html lang="en" className={fonts} suppressHydrationWarning>
      <body>
        <Providers>
          <DesignSystemProvider>{children}</DesignSystemProvider>
        </Providers>
      </body>
    </html>
  );
}
