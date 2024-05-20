'use client'

import {FC} from 'react'

import {AppProps} from 'next/app'

export function reportWebVitals(metric: any) {
  console.log(metric)
}

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
  return <Component {...pageProps} />
}

export default MyApp
