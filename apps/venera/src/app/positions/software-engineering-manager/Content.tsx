'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox} from '@/styled-components/Grid'

import stack from './stack'

import {width} from '../consants'

const Content = () => {
  return (
    <>
      <HFlexBox>
        <StrongLabel width={width}>Company:</StrongLabel>
        <TargetBlankLink
          href="https://www.elephantstock.com/"
          title="Software Engineering Manager, elephantstock.com"
          text="Elephantstock.com"
        />
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Role:</StrongLabel>
        <span>Software Engineering Manager</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Team Size:</StrongLabel>
        <span>10+</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Technologies:</StrongLabel>
        <span>{stack.join(', ')}</span>
      </HFlexBox>
    </>
  )
}

export default Content
