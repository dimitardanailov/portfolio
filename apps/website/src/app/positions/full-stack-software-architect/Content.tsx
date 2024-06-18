'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox, VFlexbox} from '@/styled-components/Grid'

import {stack} from './db'

import {width} from '../consants'

import position from './details'
import {listStyle} from '@/shared/tailwind'

const Responsibilities = () => {
  return (
    <>
      <VFlexbox className="my-3">
        <StrongLabel width={width}>Responsibilities:</StrongLabel>
        <ul className={listStyle}>
          <li>
            <div className="font-bold">Source Code Development:</div>
            <ul className="list-disc mx-8">
              <li>
                Implemented various complex technological solutions including an
                equation editor utilizing MathJax as an external library.
              </li>
              <li>
                Developed a sophisticated tool for drawing different shapes
                within a coordinate system using d3js.
              </li>
              <li>Created and maintained diverse native web components.</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Stakeholder Alignment:</span> Worked
            closely with stakeholders both onsite in Minnesota and remotely from
            Bulgaria, ensuring a deep understanding of their business needs and
            objectives to facilitate effective alignment and project success.
          </li>
          <li>
            <span className="font-bold">Team Leadership and Development:</span>{' '}
            Led the substantial growth of the engineering team, concentrating on
            efficient onboarding processes and continuous training to support
            team expansion and skill enhancement.
          </li>
        </ul>
      </VFlexbox>
    </>
  )
}

const Accomplishments = () => {
  return (
    <>
      <VFlexbox>
        <StrongLabel width={width}>Accomplishments:</StrongLabel>
        <ul className={listStyle}>
          <li>
            <span className="font-bold">Stakeholder Alignment:</span>
          </li>
          <li>
            <span className="font-bold">Innovation and Productivity:</span>
          </li>
        </ul>
      </VFlexbox>
    </>
  )
}

const Content = () => {
  return (
    <>
      <HFlexBox>
        <StrongLabel width={width}>Company:</StrongLabel>
        <TargetBlankLink
          href={position.externalUrl}
          title={position.title}
          text={position.company}
        />
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Role:</StrongLabel>
        <span>{position.title}</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Team Size:</StrongLabel>
        <span>{position.teamSize}</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Technologies:</StrongLabel>
        <span>{stack.join(', ')}</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Architecture</StrongLabel>
        <span>Microservices</span>
      </HFlexBox>
      <Responsibilities />
    </>
  )
}

export default Content
