'use client'

import {Slogan} from '@/styled-components'

import Article from './Article'

// import Mermaid from './Mermaid'

import {slogan} from './seo'
import Tags from './Tags'

// import diagram from './diagram'

const Content = () => {
  return (
    <article>
      <Slogan>{slogan}</Slogan>

      <Article />

      <Tags component={Article} />
    </article>
  )
}

export default Content
