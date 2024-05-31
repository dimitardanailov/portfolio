'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox} from '@/styled-components/Grid'

import DavidLetter from '@/app/recommendation-letters/projects/elephantstock/components/DavidLetter'
import ShlomiLetter from '@/app/recommendation-letters/projects/elephantstock/components/ShlomiLetter'

import stack from './stack'

import {width} from '../consants'

import position from './details'

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
        <span>Backend for frontend, Image recognition</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Recommendations</StrongLabel>
      </HFlexBox>
      <DavidLetter />
      <ShlomiLetter />
    </>
  )
}

export default Content
