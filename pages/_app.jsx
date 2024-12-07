import React from 'react';
import GlobalComponent from '../components/GlobalComponent';
import '../styles/style.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalComponent>
      <Component {...pageProps} />
    </GlobalComponent>
  );
}
