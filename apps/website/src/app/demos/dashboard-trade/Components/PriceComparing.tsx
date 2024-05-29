'use client'

import {FC} from 'react'

import styled from 'styled-components'

const colorDown = '#e15241'
const colorUp = '#4eaf0a'

const ColorInfo = styled.span`
  position: relative;

  display: flex;
  flex-direction: row;
  overflow: hidden;

  justify-content: left;
  align-items: center;
  color: ${props => props.color};
`

export interface Props {
  percent: number
  children: React.ReactNode
}

const PriceComparing: FC<Props> = ({percent, children}) => {
  let color
  if (Math.sign(percent) === 1) {
    color = colorUp
  } else {
    color = colorDown
  }

  return <ColorInfo color={color}>{children}</ColorInfo>
}

export default PriceComparing
