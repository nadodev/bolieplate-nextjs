import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/Global'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}
