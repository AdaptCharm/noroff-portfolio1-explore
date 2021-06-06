import '@assets/main.css'
import '@assets/chrome-bug.css'
import '@assets/tippy.css'
import 'keen-slider/keen-slider.min.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'

import { Head, ProgressBar } from '@components/common'

const Noop: FC = ({ children }) => <>{children}</>

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ProgressBar />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp