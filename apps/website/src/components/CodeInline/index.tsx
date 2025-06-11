'use client'

import {FC} from 'react'

export interface Props {
  children: string
}

const CodeInline: FC<Props> = ({children}) => {
  return <code className="inline-code">{children}</code>
}

export default CodeInline
