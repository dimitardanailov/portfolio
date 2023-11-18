'use client'

import {FC} from 'react'

import Link from 'next/link'

export interface Props {
  href: string
  title: string
  Element?: JSX.Element
  text?: string
}

const TargetBlankLink: FC<Props> = ({Element, href, title, text}) => {
  return (
    <Link href={href} target="_blank" title={title}>
      {Element}
      {text}
    </Link>
  )
}

export default TargetBlankLink
