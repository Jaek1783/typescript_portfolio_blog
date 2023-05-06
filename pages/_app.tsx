import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import MyContext from '../store/context';
import axios, {AxiosResponse} from 'axios';
export default function MyApp({ Component, pageProps }: AppProps) {
  type SKILL = {id : number, title : string, image : string};

  const [data, setData] = useState<SKILL[]>([]);
  let responseData;
useEffect(()=>{

    axios.get('/skillData.json')
    .then((response:AxiosResponse<SKILL[]>)=>{
      setData(response.data);
  });
},[]);
  return (
      <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <MyContext.Provider value = {data}>
              <Component {...pageProps} />
      </MyContext.Provider>
      
    </Layout>
  )
}