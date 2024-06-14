'use client'

import {Slogan} from '@/styled-components'

import Link from 'next/link'

import items from './items'
import {description} from './seo'

import styled from 'styled-components'

const ListItem = styled.li`
  position: relative;

  list-style: none;
  margin: 0.5rem 0rem 1rem;
`

const Title = styled.div`
  font-weight: bold;
  font-style: italic;
  padding-bottom: 0.25rem;

  &:hover {
    color: #0000ff;
  }
`

const ListItems = () => {
  const listItems = items.map((item, i) => (
    <ListItem key={i}>
      <Title>
        <Link key={i} title={item.title} href={item.canonical}>
          <span className="hover:underline">{item.description}</span>
        </Link>
      </Title>

      <p>Technologies: {item.stack.join(', ')}</p>
    </ListItem>
  ))

  return listItems
}

const Content = () => {
  return (
    <>
      <Slogan>{description}</Slogan>
      <ul>
        <ListItems />
      </ul>
    </>
  )
}

export default Content
