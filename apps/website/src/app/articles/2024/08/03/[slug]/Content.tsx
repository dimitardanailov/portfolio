'use client'

import {Slogan} from '@/styled-components'

import Article from './Article'

import {slogan} from './seo'
import Tags from '@/components/ArticleTags'
import TargetBlankLink from '@/components/TargetBlankLink'

const Content = () => {
  const listStyle = 'list-disc mx-6 mt-0 mb-5'

  return (
    <article>
      <Slogan>{slogan}</Slogan>

      <Article />

      <Tags component={Article} />
      <p>
        <span className="font-bold">Resources</span>
      </p>
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            href="https://react.dev/blog/2024/04/25/react-19"
            title="React 19 RC"
            text="React 19 RC"
          />
        </li>
      </ul>
    </article>
  )
}

export default Content
