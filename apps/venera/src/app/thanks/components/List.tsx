'use client'

import {FC} from 'react'
import {Slogan} from '@/styled-components'
import TargetBlankLink from '@/components/TargetBlankLink'

export interface Props {
  title: string
}

const List: FC<Props> = ({title}) => {
  const Element = () => {
    return <span>You?</span>
  }

  return (
    <>
      <Slogan>{title}</Slogan>
      <ul>
        <li>
          <TargetBlankLink
            href="https://github.com/dimitardanailov"
            Element={<Element />}
            title={title}
          />
        </li>
      </ul>
    </>
  )
}

export default List
