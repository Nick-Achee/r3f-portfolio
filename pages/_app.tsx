import React from 'react'

import '../styles/globals.css'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for collection views (optional)
import 'rc-dropdown/assets/index.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'

import type { AppProps } from 'next/app';

import '../styles/globals.css';
import Navigation from '../components/Nav'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (

    <>
    <Navigation />
    <Component {...pageProps} />
    </>
  );
};

export default MyApp;
