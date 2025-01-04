'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import {listStyle} from './shared'
import {experienceByYears, managerExperience} from '@/constants/text'

const Accomplishments = () => {
  return (
    <>
      <div className="font-bold">Accomplishments</div>
      <ul className={listStyle}>
        <li>
          <span className="font-bold">
            {experienceByYears}+ years experience
          </span>
          . Experience with management of agile teams;
        </li>
        <li>Leadership roles: {managerExperience} years;</li>
        <li>
          <TargetBlankLink
            text="Ex - contractor Siemens"
            title="Senior Architect"
            href="/letters/senior-architect.pdf"
          />{' '}
          and The international Red cross;
        </li>
        <li>ex-CTO in outsoursing company. Duration: 18 months;</li>
        <li>2 x Staff Engineer / Engineering manager;</li>
        <li>4 x Software Architect / Tech - Lead;</li>
        <li>
          <TargetBlankLink
            Element={
              <span className="font-bold">Top 4% user in Stack Overflow</span>
            }
            title="Top 4% user in Stack Overflow"
            href="https://stackoverflow.com/users/609707/d-danailov"
          />
        </li>
        <li>
          Contract offered by The European Commission based in Brussels.
          Contract type: Belgium (On-site); Position: Application Architect;
        </li>
        <li>
          Open source contributor:{' '}
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
