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
              <ListLabel phrase="Core Development Role" />
              Played a key role in core software development, delivering
              high-quality code and innovative solutions.
            </li>
            <li>
              <ListLabel phrase="PHP Framework Engineering" />
              Worked extensively on a custom PHP framework, ensuring robust
              performance and adaptability for various projects.
            </li>
            <li>
              <ListLabel phrase="Team Onboarding" /> Facilitated the onboarding
              process for new team members, providing guidance and support to
              help them integrate into the team effectively.
            </li>
            <li>
              <ListLabel phrase="Technical Training and Courses" /> Delivered
              technical training sessions internally and externally, fostering a
              culture of continuous learning and development within the team.
            </li>
          </ul>
        </VFlexbox>
      </VFlexbox>
    </>
  )
}

export default Responsibilities
