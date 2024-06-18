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
              <span className="font-bold">Core Development Role:</span> Played a
              key role in core software development, delivering high-quality
              code and innovative solutions.
            </li>
            <li>
              <span className="font-bold">PHP Framework Engineering:</span>{' '}
              Worked extensively on a custom PHP framework, ensuring robust
              performance and adaptability for various projects.
            </li>
            <li>
              <span className="font-bold">Team Onboarding:</span> Facilitated
              the onboarding process for new team members, providing guidance
              and support to help them integrate into the team effectively.
            </li>
            <li>
              <span className="font-bold">Technical Training and Courses</span>:
              Delivered technical training sessions internally and externally,
              fostering a culture of continuous learning and development within
              the team.
            </li>
          </ul>
        </VFlexbox>
      </VFlexbox>
    </>
  )
}

export default Responsibilities
