import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';

import MyContext from '../store/context';
import { Projects } from '../store/context';
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyContext.Provider value ={Projects}>
      <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
    </MyContext.Provider>
  )
}