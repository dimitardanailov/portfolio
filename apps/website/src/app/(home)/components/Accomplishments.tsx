'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import {listStyle} from './shared'
import {experienceByYears} from '@/constants/text'

const Accomplishments = () => {
  return (
    <>
      <div className="font-bold">Accomplishments</div>
      <ul className={listStyle}>
        <li>
          <span className="font-bold">
            {experienceByYears}+ years experience
          </span>
          . My portfolio includes clients based in USA, Singapore, Israel,
          Germany, Great Britain, Switzerland, United Arab Emirates, Indonesia;
        </li>
        <li>
          <TargetBlankLink
            text="Ex - contractor Siemens"
            title="Senior Architect"
            href="/letters/senior-architect.pdf"
          />{' '}
          and The international Red cross;
        </li>
        <li>Ex CTO, Staff Engineer, Architect and Engineering manager;</li>
        <li>Management and Leadership skills: 10+ years;</li>
        <li>
          <TargetBlankLink
            Element={
              <span className="font-bold">Top 4% user in Stack Overflow</span>
            }
            title="Top 4% user in Stack Overflow"
            href="https://stackoverflow.com/users/609707/d-danailov"
          />
        </li>
      </ul>
    </>
  )
}

export default Accomplishments
