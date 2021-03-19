import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Fragment, useEffect } from 'react';
import Router from 'next/router';

export default function Index() {
  useEffect(() => {
    Router.push('/home')
  },[])
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
    </Fragment>
  )
}
