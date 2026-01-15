'use client'

import {FC} from 'react'

import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
  PersonInfo,
  Technologies,
} from '../../components'

import source from '@/data/testimonials/images/clearroute/nikolay'

const Letter: FC = () => {
  return (
    <>
      <ProjectTitle
        title="Collinson group"
        href="https://www.collinsongroup.com/"
      />
      <Industry text="Travel Company" />
      <MarketPlace text="Worldwide" />
      <HeadQuater text="United Kingdom" />
      <Position text="Full Stack Engineer and Tech Lead" />
      <Technologies technologies="Nodejs, GraphQL and Apollo Federation, Datadog and Winston, React, Nextjs, Vercel, Mongodb, kubernetes, docker, jest, cerbos, aws" />
      <PersonInfo
        name="Nikolay Nikolov"
        source={source}
        title="ClearRoute Ltd., Managing Director at ClearRoute"
      />
      <p>
        I worked with Dimitar as part of an agency assignment on software
        development project. Dimitar is an excellent professional with a sense
        and attention to detail. He knows in detail the technological platforms
        he works with. He has a professional attitude to every task. His
        knowledge often goes beyond subject matter expertise most of the time
        covering uncharted grounds where others cant go.
      </p>
    </>
  )
}

export default Letter
