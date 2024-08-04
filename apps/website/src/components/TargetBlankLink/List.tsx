'use client'

import {FC} from 'react'

import {listStyle} from '@/shared/tailwind'

import randomID from '@/utils/random/uuid'
import TargetBlankLink, {Props as LinkProps} from './index'

export interface Props {
  listItems: Array<LinkProps>
  className?: string
}

const List: FC<Props> = ({listItems, className}) => {
  const listClassName = className ? className : listStyle

  const items = listItems.map((props: LinkProps, index: number) => {
    const key = `target-blank-link-list-${randomID()}-${index}`

    return (
      <li key={key}>
        <TargetBlankLink {...props} />
      </li>
    )
  })

  return <ul className={listClassName}>{items}</ul>
}

export default List
