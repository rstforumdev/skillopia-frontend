import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, NormalizeCSS, GlobalStyles } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import { Layout } from '../components/Common/Layout/Layout';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Skillopia</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}>
        <NormalizeCSS />
        <GlobalStyles />

        <Layout>
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </Layout>
      </MantineProvider>
    </>
  );
}
