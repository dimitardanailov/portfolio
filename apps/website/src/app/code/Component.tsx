'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'

import Content from './Content.mdx'

const Component = () => {
  return <Content components={{code}} language="javascript" />
}

function code({...props}) {
  return <SyntaxHighlighter language="javascript" PreTag="div" {...props} />
}

export default Component
