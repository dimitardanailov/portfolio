'use client'

import {FC, useEffect, useState} from 'react'

import {createGoogleGenerativeAI} from '@ai-sdk/google'
import {generateText} from 'ai'

import Body from './Body'

export interface Props {
  component: string
}

const Tags: FC<Props> = ({component}) => {
  const [aiTags, setPromtPresponse] = useState<Array<string>>([])

  console.log('Body', Body)

  useEffect(() => {
    if (aiTags.length > 0) return

    const google = createGoogleGenerativeAI({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_AI_KEY,
    })
    const model = google('models/gemini-pro')

    generateText({
      model,
      prompt: `From the following react component: ${Body} please create five tags. Tags should be return as a plain text seperated with with comma`,
    }).then(response => {
      const tags = response.text.split(',')

      setPromtPresponse(tags)
    })
  }, [aiTags])

  return <>{aiTags.join(',')}</>
}

export default Tags
