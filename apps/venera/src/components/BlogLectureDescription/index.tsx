'use client'

import {FC} from 'react'

export interface Props {
  children: JSX.Element
}

const BlogLectureDescription: FC<Props> = ({children}) => {
  return (
    <>
      <p>{children}</p>
    </>
  )
}

export default BlogLectureDescription
