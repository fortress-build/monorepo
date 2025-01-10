import "@repo/design-system/styles/globals.css";
import { DesignSystemProvider } from "@repo/design-system";
import { fonts } from "@repo/design-system/lib/fonts";
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
