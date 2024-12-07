import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Find the best home services" />
      </Head>
      <body className='body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
