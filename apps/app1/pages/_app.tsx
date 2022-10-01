import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { StylesProvider } from '@material-ui/core';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to app1!</title>
      </Head>
      <main className="app">
        <StylesProvider injectFirst>
          <Component {...pageProps} />
        </StylesProvider>
      </main>
    </>
  );
}

export default CustomApp;
