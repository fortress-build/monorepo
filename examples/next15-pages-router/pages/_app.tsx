import { NerveProvider } from '@nerve-js/next';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NerveProvider
      redirectUrl="http://localhost:3000/callback/"
      afterRedirectUrl="http://localhost:3000/"
      signInUrl="http://localhost:3000/auth/login"
    >
      <Component {...pageProps} />
    </NerveProvider>
  );
}