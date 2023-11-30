'use client'

import {Slogan} from '@/styled-components'
import {Keyword} from '@/components/SEO'

import ScalabilityWebDevelopmentDavidMalan from '@/blog/lectures/scalability-web-development-by-david-malan'
import DistributedSystemsinOneLessonbyTimBerglund from '@/blog/lectures/distributed-systems-in-one-lesson-by-tim-berglund'
import DistributedProgrammingDecentralizedWorld from '@/blog/lectures/distributed-programming-decentralized-world'
import StreamingMillionLikesSecond from '@/blog/lectures/streaming-million-likes-second'
import BuildingScalableHighlyConcurrentFaultTolerantSystems from '@/blog/lectures/building-scalable-highly-concurrent-fault-tolerant-systems'
import MartinMicroservices from '@/blog/lectures/microservices-martin fowler-goto-2014'
import Uber1000Services from '@/blog/lectures/uber-1000-services'
import KrakenMicroservices from '@/blog/lectures/kraken-rust-microservices'

const Content = () => {
  const listStyle = 'list-disc mx-6 mt-0 mb-5'

  return (
    <>
      <Slogan>
        Resources about system design, distributed systems, microservices and
        monolith
      </Slogan>

      <p>
        I&#39;ve been working like a <Keyword word="contractor" />,{' '}
        <Keyword word="full stack engineer" /> or{' '}
        <Keyword word="b2b contractor" /> in the past several years. The
        important subjects of my daily work are:
      </p>

      <ul className={listStyle}>
        <li>
          <Keyword word="System design" />
        </li>
        <li>
          <Keyword word="Web Development - Scalability" />
        </li>
        <li>
          <Keyword word="Distributed Systems" />
        </li>
        <li>
          <Keyword word="Real-Time and Streaming" />
        </li>
        <li>
          <Keyword word="Microservices and monolith" />
        </li>
        <li>
          <Keyword word="Automation testing" />
        </li>
        <li>
          <Keyword word="Fault-Tolerant Systems" />
        </li>
      </ul>

      <p className="mt-1">Video presentations:</p>

      <ul>
        <li>
          <ScalabilityWebDevelopmentDavidMalan />
        </li>
        <li>
          <DistributedSystemsinOneLessonbyTimBerglund />
        </li>
        <li>
          <DistributedProgrammingDecentralizedWorld />
        </li>
        <li>
          <StreamingMillionLikesSecond />
        </li>
        <li>
          <BuildingScalableHighlyConcurrentFaultTolerantSystems />
        </li>
        <li>
          <MartinMicroservices />
        </li>
        <li>
          <Uber1000Services />
        </li>
        <li>
          <KrakenMicroservices />
        </li>
      </ul>
    </>
  )
}

export default Content
