'use client'

import {Keyword} from '@/components/SEO'
import {Slogan} from '@/styled-components'

import {
  PropineLetter,
  AsianAbsoluteLetter,
  ElephantstockLetter,
  FleetpalLetter,
  GetcraftLetter,
  QuestaraiLetter,
  WollowSoftLetter,
} from './projects'

const Content = () => {
  return (
    <>
      <Slogan>
        Implementer of high technologies when solving complex business
        situations/problems
      </Slogan>
      <h4>
        Able to identify problems, analyze answers and implement the optimal
        solutions
      </h4>
      <p>
        I&rsquo;ve been working as a Software Development Contractor since 2018.{' '}
        My key skills are: <Keyword word="Nodejs" />, <Keyword word="React" />,{' '}
        <Keyword word="AWS" /> and <Keyword word="Blockchain" />; My work was
        five star recommendation letters:
      </p>
      <PropineLetter />
      <AsianAbsoluteLetter />
      <ElephantstockLetter />
      <FleetpalLetter />
      <GetcraftLetter />
      <QuestaraiLetter />
      <WollowSoftLetter />
    </>
  )
}

export default Content