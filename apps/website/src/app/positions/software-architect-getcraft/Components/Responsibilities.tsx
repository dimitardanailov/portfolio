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
        <ul className={listStyle}>
          <li>
            <span className="Front-end Refactoring">
              Front-end Refactoring:
            </span>
            Led the transformation of a legacy React application, addressing
            outdated dependencies and complex code structures to improve
            maintainability and user experience across mobile devices.
          </li>
          <li>
            <span className="font-bold">Google Cloud Infrastructure:</span>{' '}
            Implemented strategic optimizations within Google Cloud services,
            rectifying previous misconfigurations and enhancing security with
            AI-driven firewall solutions.
          </li>
          <li>
            <span className="font-bold">Stakeholder Alignment:</span> Engaged
            with diverse stakeholder groups to analyze operational needs,
            identify optimization opportunities, and deliver solutions that
            streamline workflows and support business objectives.
          </li>
        </ul>
      </VFlexbox>
    </>
  )
}

export default Responsibilities
