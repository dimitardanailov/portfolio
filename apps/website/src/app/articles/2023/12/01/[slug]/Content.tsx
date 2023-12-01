'use client'

import {Slogan} from '@/styled-components'
import {Keyword} from '@/components/SEO'

import EcmascriptHarmonyRiseCompilers from '@/blog/lectures/ecmascript-harmony-rise-compilers'

const Content = () => {
  const listStyle = 'list-disc mx-6 mt-0 mb-5'

  return (
    <>
      <Slogan>The art of onboarding of a new backend engineer</Slogan>

      <p>
        My manager gave me as a task to help of onboarding of a new team member
        of our team. My decision is to create the following page like a guide if
        you&rsquo;ve the same task like me. On the other hand the resource list
        could be useful for junior / mid lever or senior engineers. A few key
        themes:
      </p>

      <ul className={listStyle}>
        <li>
          <Keyword word="Async-await" />
        </li>
        <li>
          <Keyword word="Ecmascript 6" />
        </li>
        <li>
          <Keyword word="Pull requests tips and tricks" />
        </li>
      </ul>

      <p className="mt-1">Video presentations:</p>

      <ul>
        <li>
          <EcmascriptHarmonyRiseCompilers />
        </li>
      </ul>
    </>
  )
}

export default Content
