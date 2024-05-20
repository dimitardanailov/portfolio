'use client'

import {listStyle} from './shared'
import {experienceByYears, clientLocations} from '@/constants/text'

const Accomplishments = () => {
  return (
    <>
      <div className="font-bold">Accomplishments</div>
      <ul className={listStyle}>
        <li>
          <span className="font-bold">
            {experienceByYears}+ years experience
          </span>
          . My portfolio includes clients based in {clientLocations.join(', ')};
        </li>
        <li>
          HR Business Partner, International IT Recruiter, Career Coach and
          Trainer, Employee Development Specialist
        </li>
        <li>Management and Leadership skills: 8+ years;</li>
      </ul>
    </>
  )
}

export default Accomplishments
