'use client'

import {FC} from 'react'

import Link from 'next/link'

export interface Props {
  Element: JSX.Element
  href: string
  title: string
}

const TargetBlankLink: FC<Props> = ({Element, href, title}) => {
  return (
    <Link href={href} target="_blank" title={title}>
      {Element}
    </Link>
  )
}

export default TargetBlankLink
