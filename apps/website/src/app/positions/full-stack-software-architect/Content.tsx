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
            <span className="font-bold">Stakeholder Alignment:</span> Engaged
            with various stakeholder groups to assess operational needs, define
            business requirements, and produce precise architectural diagrams.
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
