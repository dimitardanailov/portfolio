'use client'

import Link from 'next/link'

import {title, canonical} from './2023/11/27/[slug]/seo'

const Content = () => {
  return (
    <>
      <Link href={canonical}>{title}</Link>
    </>
  )
}

export default Content
