'use client'

import {FC} from 'react'

import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
  Technologies,
} from '../../components'

const Letter: FC = () => {
  return (
    <>
      <ProjectTitle
        title="queststarai.com"
        href="https://www.queststarai.com"
      />
      <Industry text="Assessment Provider" />
      <MarketPlace text="USA" />
      <HeadQuater text="USA" />
      <Position text="Software Consultant" />
      <Technologies technologies="React, Javascript, Swift, iOS" />
      <div>
        <p>
          Dimitar helped to build a new solution for a current product that
          needed revisions based on usage in a newer OS. He worked with our
          enterprise architect and a dedicated dev team and QA team to define
          requirements, ask questions, and to think ahead of our solution. He
          was punctual, positive, and helped to drive the process forward on a
          daily basis. Thanks for your help, Dimitar!
        </p>
      </div>
    </>
  )
}

export default Letter
