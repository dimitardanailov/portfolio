'use client'

import ExperiencePosition from '@/components/ExperiencePosition'

import {
  liveAreaPosition,
  mentorMatePosition,
  wollowSoftCTO,
  wollowSoftDeveloper,
} from '@/app/positions/db'

const conttainerClassName = 'mx-2'

import {listStyle} from '../shared'

const OnSite = () => {
  return (
    <div className={conttainerClassName}>
      <section>On site employment: 2010 - 2018</section>
      <ul className={listStyle}>
        <li>
          <ExperiencePosition position={liveAreaPosition} />
        </li>
        <li>
          <ExperiencePosition position={mentorMatePosition} />
        </li>
        <li>
          Wollow Soft:
          <ul className={listStyle}>
            <li>
              <ExperiencePosition position={wollowSoftCTO} />
            </li>
            <li>
              <ExperiencePosition position={wollowSoftDeveloper} />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default OnSite
