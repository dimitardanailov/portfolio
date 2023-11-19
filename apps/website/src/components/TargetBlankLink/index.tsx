'use client'

import {FC} from 'react'

import Link from 'next/link'

export interface Props {
  href: string
  title: string
  Element?: JSX.Element
  text?: string
  hoverIsActive?: boolean
}

const TargetBlankLink: FC<Props> = ({
  hoverIsActive = true,
  Element,
  href,
  title,
  text,
}) => {
  let textClassName = hoverIsActive ? 'hover:underline' : ''

  return (
    <Link href={href} target="_blank" title={title} className={textClassName}>
      {Element}
      {text}
    </Link>
  )
}

export default TargetBlankLink
