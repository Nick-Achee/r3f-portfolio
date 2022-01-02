import * as React from 'react';
import { NextPage } from 'next';

import dynamic from 'next/dynamic';
import Head from 'next/head';

const HomeContainer = dynamic(
  () => import('../components/containers/home/HomeContainer'),
  { ssr: false }
);

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>🐸 Nick</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
      <meta name="description" content="Personal experiments with react-three-fiber"></meta>
      <meta name="og:title" property="og:title" content="Personal experiments with react-three-fiber"></meta>
      <meta name="robots" content="index, follow"></meta>
    </Head>
    <HomeContainer className="h-100" />


  </>
);

export default IndexPage;
