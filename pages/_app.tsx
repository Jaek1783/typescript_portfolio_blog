import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import MyContext from '../store/context';
import axios, {AxiosResponse} from 'axios';
import type { SKILL } from '../store/context';

interface scrollProps {
  scrollValue : number
}
export default function MyApp({ Component, pageProps }: AppProps) {

  const [scrollValue, setScrollValue] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollValue(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [data, setData] = useState<SKILL[]>([]);

useEffect(()=>{
    axios.get('/skillData.json')
    .then((response:AxiosResponse<SKILL[]>)=>{
      setData(response.data);
  });
},[]);
  return (
      <Layout scrollValue = {scrollValue}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <MyContext.Provider value = {data}>
              <Component {...pageProps} />
      </MyContext.Provider>
      
    </Layout>
  )
}