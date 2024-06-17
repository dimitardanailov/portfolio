'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import TargetBlankLink from '@/components/TargetBlankLink'
import {HFlexBox, VFlexbox} from '@/styled-components/Grid'

import DavidLetter from '@/app/recommendation-letters/projects/elephantstock/components/DavidLetter'
import ShlomiLetter from '@/app/recommendation-letters/projects/elephantstock/components/ShlomiLetter'

import stack from './stack'

import {width} from '../consants'

import position from './details'
import {listStyle} from '@/shared/tailwind'

const Responsibilities = () => {
  return (
    <>
      <VFlexbox className="my-3">
        <StrongLabel width={width}>Responsibilities:</StrongLabel>
        <ul className={listStyle}>
          <li>
            <span className="font-bold">Graph Structure Implementation:</span>
            Transformed the flat category structure into a complex graph
            structure using design patterns like Model Tree Structures with
            Parent References, Child References, and an Array of Ancestors.
          </li>
          <li>
            <span className="font-bold">
              AI-Powered Search: Upgraded the search system from Shopify&rsquo;s
              default to an AI-enhanced search using Algolia, significantly
              improving search performance.
            </span>
          </li>
          <li>
            <span className="font-bold">Image Processing:</span> Created an
            image labeling system using color quantization for metadata
            extraction, supporting machine learning algorithms to link products
            and images.
          </li>
          <li>
            <span className="font-bold">Innovation and Productivity:</span>
            Worked with different categories to optimize their workflows,
            fostering innovation through the adoption of the 80/20 rule to
            encourage engineers to focus on product-oriented and creative tasks.
          </li>

          <li>
            <span className="font-bold">Team Growth and Development:</span>{' '}
            Directed the significant expansion of the engineering team, focusing
            on effective onboarding and continuous training as the team scaled
            up.
          </li>
        </ul>
      </VFlexbox>
    </>
  )
}

const Accomplishments = () => {
  return (
    <>
      <VFlexbox>
        <StrongLabel width={width}>Accomplishments:</StrongLabel>
        <ul className={listStyle}>
          <li>
            <span className="font-bold">Innovation and Productivity:</span>{' '}
            Adopted Google&rsquo;s 80/20 rule, encouraging engineers to dedicate
            time to innovative, product-focused tasks.
          </li>
          <li>
            <span className="font-bold">Team Expansion:</span> Oversaw the
            growth of the engineering team, achieving a more than 250% increase
            in size.
          </li>
        </ul>
      </VFlexbox>
    </>
  )
}

const Recommendations = () => {
  return (
    <>
      <HFlexBox>
        <StrongLabel width={width}>Recommendations</StrongLabel>
      </HFlexBox>
      <DavidLetter />
      <ShlomiLetter />
    </>
  )
}

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
      <Responsibilities />
      <Accomplishments />
      <Recommendations />
    </>
  )
}

export default Content
