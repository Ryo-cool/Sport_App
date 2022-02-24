import React from 'react'
import {AppProps} from 'next/app';
// import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp