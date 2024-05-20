'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox} from '@/styled-components/Grid'

import {Keyword} from '@/components/SEO'

import {position as role, teamSize} from './details'
import stack from './stack'

import {width} from '../consants'

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
        <span>Microservices, Clean Architecture</span>
      </HFlexBox>
    </>
  )
}

export default Content
