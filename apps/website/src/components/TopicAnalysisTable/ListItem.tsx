'use client'

import {FC} from 'react'

import styled from 'styled-components'

const StyledList = styled.ul`
  position: relative;

  display: flex;
  flex-direction: column;
  widht: 100%;

  align-items: stretch;
  height: 100%;
`

const ListItem = styled.li`
  list-style-type: none;
  padding: 0;
  margin: 0;

  flex: 1;

  border: 1px solid #c9c9c9;
`

const StyledListItem = styled.div`
  margin: 0.2rem 0;
  text-indent: 0.5rem;
  margin-left: 0.25rem;
`

const MobileViewTitle = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;

    text-indent: 0.5rem;
    font-weight: bold;

    border: 1px solid #c9c9c9;
  }
`

export interface Props {
  listItems: string[]
  title: string
}

const List: FC<Props> = ({listItems, title}) => {
  const items = listItems.map((item: string, index: number) => {
    return (
      <ListItem key={`list-item-key-${index}`}>
        <StyledListItem>{item}</StyledListItem>
      </ListItem>
    )
  })

  return (
    <StyledList>
      <MobileViewTitle>{title}</MobileViewTitle>
      {items}
    </StyledList>
  )
}

export default List
