'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox, VFlexbox} from '@/styled-components/Grid'

import stack from './stack'

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
            <span className="font-bold">Innovation and Productivity:</span>{' '}
            Added new technological perspectives and implemented innovative
            solutions to drive productivity and technological advancement.
          </li>

          <li>
            <span className="font-bold">Stakeholder Alignment:</span>{' '}
            Collaborated with stakeholders onsite and remotely from Bulgaria to
            understand their business needs and objectives, ensuring effective
            alignment.
          </li>

          <li>
            <span className="font-bold">Development of Architecture:</span>{' '}
            Created comprehensive architectural diagrams to ensure a clear and
            effective development roadmap.
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
            <span className="font-bold">Stakeholder Alignment:</span> Engaged
            with diverse stakeholder groups to analyze operational needs,
            identify the business requirements, and deliver different diagrams;
          </li>
          <li>
            <span className="font-bold">Innovation and Productivity:</span> One
            of the first team worldwide adopting and supporting Typescript and
            Ecmascript 6.
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
        <span>Monolith architecture</span>
      </HFlexBox>
      <Responsibilities />
      <Accomplishments />
    </>
  )
}

export default Content
