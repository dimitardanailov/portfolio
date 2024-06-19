'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import {VFlexbox} from '@/styled-components/Grid'

import ListLabel from '@/app/positions/shared/components/ListLabel'

import {width} from '../../consants'
import {listStyle} from '@/shared/tailwind'

const Responsibilities = () => {
  return (
    <VFlexbox className="my-3">
      <StrongLabel width={width}>Responsibilities:</StrongLabel>
      <ul className={listStyle}>
        <li>
          <ListLabel phrase="Stakeholder Collaboration" />
          Engaged with stakeholders to gather and discuss business requirements,
          crafting a decentralized blockchain solution for Siemens Energy.
        </li>
        <li>
          <ListLabel phrase="Business Requirements Analysis" />
          Led the extraction and discussion of business requirements to design a
          blockchain solution for hydrogen and carbon tracking.
        </li>
        <li>
          <ListLabel phrase="Event-Driven Blockchain" />
          Designed a system where real-life IoT-detected events mint NFTs or
          certificates, tailored to the hydrogen and carbon sector.
        </li>
        <li>
          <ListLabel phrase="Test Framework Optimization" />
          Addressed and resolved race conditions in Jest tests, optimizing the
          testing process.
        </li>
        <li>
          <ListLabel phrase="Blockchain Integration" />
          Focused on integrating and optimizing blockchain oracle solutions for
          accurate and trustworthy data inputs.
        </li>
      </ul>
    </VFlexbox>
  )
}

export default Responsibilities
