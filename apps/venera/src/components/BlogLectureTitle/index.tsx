'use client'

import {FC} from 'react'

import styled from 'styled-components'

export interface Props {
  text: string
}

const Title = styled.h6`
  position: relative;

  font-weight: bold;
`

const BlogLectureTitle: FC<Props> = ({text}) => {
  return <Title>{text}</Title>
}

export default BlogLectureTitle
