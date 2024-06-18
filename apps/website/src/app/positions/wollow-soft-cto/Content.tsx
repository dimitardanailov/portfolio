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
            <span className="font-bold">Team Oversight:</span>
            Directed a team of 20-25 engineers, fostering a productive and
            collaborative work environment.
          </li>
          <li>
            <span className="font-bold">New Department Launch:</span>
            Successfully opened and grew two new technical departments focused
            on Ruby on Rails and .Net, expanding the company&lsquo;s service
            offerings.
          </li>
          <li>
            <span className="font-bold">Client Satisfaction Improvement:</span>
            Addressed the issue of unhappy customers by implementing process
            improvements to ensure timely project delivery, reducing delays that
            had previously extended several weeks or months beyond client
            agreements.
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
