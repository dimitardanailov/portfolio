'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox, VFlexbox} from '@/styled-components/Grid'
import {Keyword} from '@/components/SEO'
import {listStyle} from '@/shared/tailwind'

import {technologies, position} from './db'

import {width} from '../consants'

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
        <span>
          <Keyword word={position.title} />
        </span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Team Size:</StrongLabel>
        <span>20+</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Period:</StrongLabel>
        <span>{position.period}</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Technologies:</StrongLabel>
        <span>{technologies.join(', ')}</span>
      </HFlexBox>
      <HFlexBox>
        <StrongLabel width={width}>Architecture</StrongLabel>
        <span>Microservices, Clean Architecture, Custody wallets</span>
      </HFlexBox>
      <VFlexbox className="my-3">
        <StrongLabel width={width}>Responsibilities:</StrongLabel>
        <ul className={listStyle}>
          <li>
            Implement support for various blockchain architectures and integrate
            our applications to various native Blockchains. Design & deliver
            thoughtfully crafted REST APIs, interfaces and database schemas to
            ensure scalability, maintainability, and performance;
          </li>
          <li>
            Participate in and contribute actively to architecture reviews, code
            reviews, design reviews, postmortems, and raise the bar for
            engineering best practices across the team;
          </li>
          <li>
            Setup and secure blockchain nodes, wallets and application servers;
          </li>
          <li>Write scripts to automate the deployment of infrastructure;</li>
          <li>
            Document steps and processes for the setup and maintenance of
            infrastructure;
          </li>
        </ul>
      </VFlexbox>
    </>
  )
}

export default Content
