'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox} from '@/styled-components/Grid'

import stack from './stack'
import {Keyword} from '@/components/SEO'

const Content = () => {
  const width = 130

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
    </>
  )
}

export default Content
