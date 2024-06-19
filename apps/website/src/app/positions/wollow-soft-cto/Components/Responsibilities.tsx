'use client'

import {VFlexbox} from '@/styled-components/Grid'
import StrongLabel from '@/styled-components/Text/StrongLabel'

import {listStyle} from '@/shared/tailwind'

import ListLabel from '@/app/positions/shared/components/ListLabel'

import {width} from '../../consants'

const Responsibilities = () => {
  return (
    <>
      <VFlexbox className="my-3">
        <StrongLabel width={width}>Responsibilities:</StrongLabel>
        <VFlexbox className="my-3">
          <StrongLabel width={width}>Responsibilities:</StrongLabel>
          <ul className={listStyle}>
            <li>
              <ListLabel phrase="Team Oversight" />
              Directed a team of 20-25 engineers, fostering a productive and
              collaborative work environment.
            </li>
            <li>
              <ListLabel phrase="New Department Launch" />
              Successfully opened and grew two new technical departments focused
              on Ruby on Rails and .Net, expanding the company&lsquo;s service
              offerings.
            </li>
            <li>
              <ListLabel phrase="Client Satisfaction Improvement" />
              Addressed the issue of unhappy customers by implementing process
              improvements to ensure timely project delivery, reducing delays
              that had previously extended several weeks or months beyond client
              agreements.
            </li>
          </ul>
        </VFlexbox>
      </VFlexbox>
    </>
  )
}

export default Responsibilities
