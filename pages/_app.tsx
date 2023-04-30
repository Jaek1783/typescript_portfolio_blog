import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';
import axios from 'axios';
import MyContext from '../store/context';

import {useState, useEffect} from 'react';
export default function MyApp({ Component, pageProps }: AppProps) {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    axios.get('./posts.json').then((response:any) => setPosts(response.data));
  },[]);
  return (
    <MyContext.Provider value ={posts}>
      <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
    </MyContext.Provider>
  )
}