'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox, VFlexbox} from '@/styled-components/Grid'

import {Keyword} from '@/components/SEO'

import {position as role, teamSize} from './details'
import stack from './stack'

import {width} from '../consants'
import {listStyle} from '@/shared/tailwind'

const Content = () => {
  return (
    <>
      <HFlexBox>
        <StrongLabel width={width}>Company:</StrongLabel>
        <TargetBlankLink
          href="https://www.icrc.org/en"
          title={role}
          text="International Committee of the Red Cross"
        />
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Role:</StrongLabel>
        <Keyword word={role} />
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Team Size:</StrongLabel>
        <span>{teamSize}</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Technologies:</StrongLabel>
        <span>{stack.join(', ')}</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Architecture</StrongLabel>
        <span>Microservices, Clean Architecture, Polyrepo</span>
      </HFlexBox>
      <VFlexbox className="my-3">
        <StrongLabel width={width}>Responsibilities:</StrongLabel>
        <ul className={listStyle}>
          <li>
            <span className="font-bold">Mobile Project:</span> Led the
            onboarding project development using React Native, focusing on
            creating a core module with reusable components for future projects.
            Researched and implemented various techniques and tools to support
            this modular approach.
          </li>
          <li>
            <span className="font-bold">Front-end Migration:</span> Played a
            pivotal role in the complete rewrite of an existing front-end
            project using React. Worked on complex features, including file
            upload functionality, to modernize the application and improve user
            interactions.
          </li>
        </ul>
      </VFlexbox>
    </>
  )
}

export default Content
