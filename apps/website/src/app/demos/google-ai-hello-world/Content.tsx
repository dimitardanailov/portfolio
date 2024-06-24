'use client'

import {FC, useState} from 'react'

import {createGoogleGenerativeAI} from '@ai-sdk/google'
import {generateText} from 'ai'

const Component: FC = () => {
  const [promtResponse, setPromtPresponse] = useState<string>('')

  const generatePrompt = async () => {
    if (promtResponse.length === 0) {
      const google = createGoogleGenerativeAI({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_AI_KEY,
      })
      const model = google('models/gemini-pro')

      const {text} = await generateText({
        model,
        prompt: 'Write a vegetarian lasagna recipe for 4 people.',
      })

      setPromtPresponse(text)
    }
  }

  return (
    <>
      <button onClick={generatePrompt} disabled={promtResponse.length > 0}>
        Generate
      </button>
      <div>
        <span>Write a vegetarian lasagna recipe for 4 people:</span>
        <p>{promtResponse}</p>
      </div>
    </>
  )
}

export default Component
