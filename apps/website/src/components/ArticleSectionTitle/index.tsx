'use client'

import {FC} from 'react'

export interface Props {
  children: React.ReactNode
}

const ArticleTitleSection: FC<Props> = ({children}) => {
  return <span className="article-section-title">{children}</span>
}

export default ArticleTitleSection
