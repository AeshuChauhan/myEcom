import { Copyright } from '@/layout/footer'
import Header from '@/layout/header/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Header />
    <Component {...pageProps} />
  <Copyright/>
  </>
}
