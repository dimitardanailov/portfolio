'use client'

import {FC} from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter'

export interface Props {
  Content: any
}

const Component: FC<Props> = ({Content}) => {
  return <Content components={{code}} language="typescript" />
}

function code({...props}) {
  return (
    <SyntaxHighlighter language="typescript" PreTag="div" {...props}>
      {props.children}
    </SyntaxHighlighter>
  )
}

export default Component
