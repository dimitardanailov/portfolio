'use client'

import {FC, useEffect, useState} from 'react'

import {createGoogleGenerativeAI} from '@ai-sdk/google'
import {generateText} from 'ai'

export interface Props {
  component: () => JSX.Element
}

const Tags: FC<Props> = ({component}) => {
  const [aiTags, setPromtPresponse] = useState<Array<string>>([])

  useEffect(() => {
    if (aiTags.length > 0) return

    const google = createGoogleGenerativeAI({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_AI_KEY,
    })
    const model = google('models/gemini-pro')

    generateText({
      model,
      prompt: `From the following react component: ${component} please create five tags. Tags should be return as a plain text seperated with with comma`,
    }).then(response => {
      const tags = response.text.split(',')

      setPromtPresponse(tags)
    })
  }, [aiTags, component])

  if (aiTags.length === 0) return

  return <div className="mt-2 mb-2">Tags: {aiTags.join(',')}</div>
}

export default Tags
