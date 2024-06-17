'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox, VFlexbox} from '@/styled-components/Grid'
import {Keyword} from '@/components/SEO'

import stack from './stack'

import {width} from '../consants'
import {listStyle} from '@/shared/tailwind'

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
      <HFlexBox>
        <StrongLabel width={width}>Architecture:</StrongLabel>
        <span>
          Microservices, Private Blockchain, IoT, NFT / Energy ERC-721 tokens,
          Upgradable smart contracts
        </span>
      </HFlexBox>
      <VFlexbox className="my-3">
        <StrongLabel width={width}>Responsibilities:</StrongLabel>
        <ul className={listStyle}>
          <li>
            <span className="font-bold">Stakeholder Collaboration:</span>{' '}
            Engaged with stakeholders to gather and discuss business
            requirements, crafting a decentralized blockchain solution for
            Siemens Energy.
          </li>
          <li>
            <span className="font-bold">Business Requirements Analysis:</span>{' '}
            Led the extraction and discussion of business requirements to design
            a blockchain solution for hydrogen and carbon tracking.
          </li>
          <li>
            <span className="font-bold">Event-Driven Blockchain:</span> Designed
            a system where real-life IoT-detected events mint NFTs or
            certificates, tailored to the hydrogen and carbon sector.
          </li>
          <li>
            <span className="font-bold">Test Framework Optimization:</span>{' '}
            Addressed and resolved race conditions in Jest tests, optimizing the
            testing process.
          </li>
          <li>
            <span className="font-bold">Blockchain Integration:</span> Focused
            on integrating and optimizing blockchain oracle solutions for
            accurate and trustworthy data inputs.
          </li>
        </ul>
      </VFlexbox>
    </>
  )
}

export default Content
