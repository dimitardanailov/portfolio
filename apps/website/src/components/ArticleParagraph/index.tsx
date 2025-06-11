'use client'

import React, {FC} from 'react'

export interface Props {
  children: React.ReactNode
}

const ArticleParagraph: FC<Props> = ({children}) => {
  return <p className="article-section-paragraph">{children}</p>
}

export default ArticleParagraph
