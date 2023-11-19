'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import {listStyle} from './shared'

const Accomplishments = () => {
  return (
    <>
      <div>Accomplishments</div>
      <ul className={listStyle}>
        <li>
          13+ years experience. My portfolio includes clients located: USA,
          Singapore, Israel, Germany, Great Britain, Switzerland, United Arab
          Emirates, Indonesia;
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
            text="Top 4% user in Stack Overflow"
            title="Top 4% user in Stack Overflow"
            href="https://stackoverflow.com/users/609707/d-danailov"
          ></TargetBlankLink>
        </li>
      </ul>
    </>
  )
}

export default Accomplishments
