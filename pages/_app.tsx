import type { AppProps } from 'next/app';
import '../styles/globals.css';

import Layout from '../layout/header';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}