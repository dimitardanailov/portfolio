'use client'

import {FC} from 'react'

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

export interface Props {
  Content: any
  style?: {[key: string]: React.CSSProperties} | undefined
}

const Component: FC<Props> = ({Content, style}) => {
  return (
    <SyntaxHighlighter language="typescript" PreTag="div" style={style}>
      {Content}
    </SyntaxHighlighter>
  )
}

export default Component
