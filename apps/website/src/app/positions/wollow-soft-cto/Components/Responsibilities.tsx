'use client'

import {VFlexbox} from '@/styled-components/Grid'
import StrongLabel from '@/styled-components/Text/StrongLabel'

import {listStyle} from '@/shared/tailwind'

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
              <span className="font-bold">Team Oversight:</span>
              Directed a team of 20-25 engineers, fostering a productive and
              collaborative work environment.
            </li>
            <li>
              <span className="font-bold">New Department Launch:</span>
              Successfully opened and grew two new technical departments focused
              on Ruby on Rails and .Net, expanding the company&lsquo;s service
              offerings.
            </li>
            <li>
              <span className="font-bold">
                Client Satisfaction Improvement:
              </span>
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
