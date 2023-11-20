'use client'

import Link from 'next/link'
import {FC} from 'react'
import {Keyword} from '@/components/SEO'

export interface Props {
  position: string
  sufix: string
}

const PositionLink: FC<Props> = ({position, sufix}) => {
  const href = '/positions/' + sufix
  const className = 'hover:underline'

  return (
    <Link href={href} className={className} title={position}>
      <Keyword word={position} />
    </Link>
  )
}

export default PositionLink
