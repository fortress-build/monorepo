import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NerveProvider } from "@nerve-js/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NerveProvider
      redirectUrl={"/auth/callback"}
      afterRedirectUrl={"/auth/callback"}
      signInUrl={"/auth/signin"}
    >
      <Component {...pageProps} />
    </NerveProvider>
  );
}
