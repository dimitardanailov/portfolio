'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import {listStyle} from './shared'
import {
  experienceByYears,
  managerExperience,
  contractorExperience,
} from '@/constants/text'

const Accomplishments = () => {
  return (
    <>
      <div className="font-bold">Accomplishments</div>
      <ul className={listStyle}>
        <li>
          <span>
            Full stack engineer:{' '}
            <span className="font-bold">{experienceByYears}+ years</span>,{' '}
          </span>
          <span>
            People management or technical leadership responsibilities:{' '}
            <span className="font-bold">{managerExperience} years</span>,{' '}
          </span>
          <span>Remote B2B contractor: {contractorExperience} years;</span>
        </li>
        <li>
          Chief Technology Officer at outsourcing company. Duration: 18 months;
          Company size: 25+ employees;
        </li>
        <li>
          Successfully served as Staff Engineer / Engineering Manager (2x) and
          Software Architect / Tech Lead (7x), leading teams to improve project
          delivery times by 30% on average;
        </li>
        <li>
          <TargetBlankLink
            Element={
              <span className="font-bold">
                Ranked in the top 4% of users on Stack Overflow
              </span>
            }
            title="Ranked in the top 4% of users on Stack Overflow"
            href="https://stackoverflow.com/users/609707/d-danailov"
          />{' '}
          and Open source contributor:{' '}
          <TargetBlankLink
            href="https://github.com/firefox-devtools/debugger/pulls?q=is%3Apr+is%3Aclosed+author%3Adimitardanailov"
            title="Mozilla foundation"
            text="Mozilla foundation"
          />{' '}
          and{' '}
          <TargetBlankLink
            href="https://github.com/statelyai/xstate/pulls?q=is%3Apr+is%3Aclosed+author%3Adimitardanailov"
            title="@xstate/react"
            text="@xstate/react"
          />
        </li>
      </ul>
    </>
  )
}

export default Accomplishments
