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
            People management and technical roles:{' '}
            <span className="font-bold">{managerExperience} years</span>,{' '}
          </span>
          <span>Remote contractor: {contractorExperience} years;</span>
        </li>
        <li>
          Chief Technology Officer at outsourcing company. Duration: 18 months;
          Company size: 20+ employees;
        </li>
        <li>2 x Staff Engineer / Engineering manager; Duration: 24 months;</li>
        <li>7 x Software Architect / Tech - Lead;</li>
        <li>
          <TargetBlankLink
            Element={
              <span className="font-bold">Top 4% user in Stack Overflow</span>
            }
            title="Top 4% user in Stack Overflow"
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
        <li>
          Contract offered by The European Commission based in Brussels.
          Contract type: Belgium (On-site); Position: Application Architect;
        </li>
      </ul>
    </>
  )
}

export default Accomplishments
