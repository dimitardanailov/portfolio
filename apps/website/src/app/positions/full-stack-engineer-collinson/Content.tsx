'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox, VFlexbox} from '@/styled-components/Grid'

import stack from './stack'
import {Keyword} from '@/components/SEO'

import {width} from '../consants'
import {listStyle} from '@/shared/tailwind'

const Content = () => {
  return (
    <>
      <HFlexBox>
        <StrongLabel width={width}>Company:</StrongLabel>
        <TargetBlankLink
          href="https://www.collinsongroup.com/"
          title="Full Stack Engineer, collinsongroup.com"
          text="Collinsongroup.com"
        />
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Role:</StrongLabel>
        <Keyword word="Full Stack Engineer, Tech Lead" />
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Team Size:</StrongLabel>
        <span>30+</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Technologies:</StrongLabel>
        <span>{stack.join(', ')}</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Architecture</StrongLabel>
        <span>
          Microservices, Clean Architecture, Onion architecture, Micro frontends
        </span>
      </HFlexBox>
      <VFlexbox className="my-3">
        <StrongLabel width={width}>Responsibilities:</StrongLabel>
        <ul className={listStyle}>
          <li>
            <span className="font-bold">Backend Development:</span> Led the
            communication interface between our application and SwissPort using
            Node.js, TypeScript, GraphQL, and MongoDB.
          </li>
          <li>
            <span className="font-bold">Front-end Support:</span> Assisted in
            the development and maintenance of the front-end application
            utilizing GraphQL, React, Next.js, and Vercel.
          </li>
          <li>
            <span className="font-bold">System Design:</span> Designed critical
            system components, ensuring a cohesive and efficient system
            architecture.
          </li>
          <li>
            <span className="font-bold">Mentorship:</span> Provided guidance and
            support to junior developers, fostering their growth and ensuring
            quality code practices.
          </li>
          <li>
            <span className="font-bold">Automation Collaboration:</span>
            Collaborated with the automation team to streamline and enhance
            testing and deployment processes.
          </li>
        </ul>
      </VFlexbox>
    </>
  )
}

export default Content
