import React from 'react'
import {Provider} from 'react-redux';
import { store } from '../store';
import Head from 'next/head';

import '../styles/globals.css'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
              <title>CMODX</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <meta name="description" content="CMODX Watches"/>
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
              <meta name="format-detection" content="telephone=no" />
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

export default MyApp
