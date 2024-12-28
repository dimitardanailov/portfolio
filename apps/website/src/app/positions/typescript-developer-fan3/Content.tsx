'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox} from '@/styled-components/Grid'
import {Keyword} from '@/components/SEO'

import {position, technologies} from './db'

import {width} from '../consants'

import responsibilities from './responsibilities'
import {listStyle} from '@/shared/tailwind'

import Responsibilities from '@/components/Responsibilities'

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
        <Keyword word={position.title} />
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Team Size:</StrongLabel>
        <span>{position.teamSize}</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Technologies:</StrongLabel>
        <span>{technologies.join(', ')}</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Architecture:</StrongLabel>
        <span>Serverless, Microservices, NFT</span>
      </HFlexBox>
      <Responsibilities
        width={width}
        responsibilities={responsibilities}
        listStyle={listStyle}
      />
    </>
  )
}

export default Content
