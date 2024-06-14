'use client'

import {Slogan} from '@/styled-components'

import Link from 'next/link'

import items from './items'
import {description} from './seo'

const listStyle = 'list-disc mx-6 mt-0 mb-5'

const ListItems = () => {
  const listItems = items.map((item, i) => (
    <li key={i}>
      <Link key={i} title={item.title} href={item.canonical}>
        <span className="hover:underline">{item.description}</span>
      </Link>
      <p>Technologies: {item.stack.join(', ')}</p>
    </li>
  ))

  return listItems
}

const Content = () => {
  return (
    <>
      <Slogan>{description}</Slogan>
      <ul className={listStyle}>
        <ListItems />
      </ul>
    </>
  )
}

export default Content
