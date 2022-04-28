import { AppProps } from 'next/app';
import React from 'react';
import { StaticPropsContextProvider } from '~/lib/components/StaticPropsContextProvider';
import { AppBar } from '~/lib/_app/AppBar/AppBar';
import { Footer } from '~/lib/_app/Footer/Footer';
import { Head } from '~/lib/_app/Head/Head';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head />
      <StaticPropsContextProvider value={pageProps}>
        <AppBar />
        <Component {...pageProps} />
        <Footer />
      </StaticPropsContextProvider>
    </>
  );
};
