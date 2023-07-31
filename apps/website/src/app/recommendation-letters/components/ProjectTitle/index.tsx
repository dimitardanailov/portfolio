'use client'

import {FC} from 'react'

export interface Props {
  title: string
  href: string
}

const ProjectTitle: FC<Props> = ({title, href}) => {
  return (
    <>
      {title} - {href}
    </>
  )
}

export default ProjectTitle
