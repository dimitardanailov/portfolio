'use client'

import {Slogan} from '@/styled-components'

import TopicAnalysisTable from '@/components/TopicAnalysisTable'
import Body from './Body'

// import Mermaid from './Mermaid'

import {slogan} from './seo'
import {topicAnalysis} from './db'

import Tags from './Tags'

// import diagram from './diagram'

const Content = () => {
  return (
    <article>
      <Tags component="test" />
      <Slogan>{slogan}</Slogan>

      <Body />

      <TopicAnalysisTable topicAnalysis={topicAnalysis} />
    </article>
  )
}

export default Content
