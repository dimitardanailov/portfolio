'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox} from '@/styled-components/Grid'
import {Keyword} from '@/components/SEO'

import {position, technologies} from './db'

import {width} from '../consants'

import Responsibilities from './Components/Responsibilities'

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
        <span>
          Microservices, Private Blockchain, IoT, NFT / Energy ERC-721 tokens,
          Upgradable smart contracts
        </span>
      </HFlexBox>
      <Responsibilities />
    </>
  )
}

export default Content
