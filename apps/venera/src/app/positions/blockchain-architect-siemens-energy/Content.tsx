'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox} from '@/styled-components/Grid'
import {Keyword} from '@/components/SEO'

import stack from './stack'

import {width} from '../consants'

const Content = () => {
  return (
    <>
      <HFlexBox>
        <StrongLabel width={width}>Company:</StrongLabel>
        <TargetBlankLink
          href="https://www.siemens-energy.com/global/en/home.html"
          title="Blockchain Architect, siemens-energy.com"
          text="Siemens-energy.com"
        />
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Role:</StrongLabel>
        <Keyword word="Blockchain / Senior Architect" />
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Team Size:</StrongLabel>
        <span>15+</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Technologies:</StrongLabel>
        <span>{stack.join(', ')}</span>
      </HFlexBox>
    </>
  )
}

export default Content
