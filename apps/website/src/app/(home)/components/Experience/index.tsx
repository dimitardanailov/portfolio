'use client'

import ContractRoles from './ContractRoles'

import {listStyle} from '../shared'

import ExperiencePosition from '@/components/ExperiencePosition'

import {liveAreaPosition, mentorMatePosition} from '@/app/positions/db'

const conttainerClassName = 'mx-2'

const Contractor = () => {
  return (
    <div className={conttainerClassName}>
      <section>Remote B2B Contractor (2018 - present)</section>
      <ul className={listStyle}>
        <ContractRoles />
      </ul>
    </div>
  )
}

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
            <li>CTO, Woollow Soft: 2014 - 2015; (Team size: 30+);</li>
            <li>Developer and Team Leader: 2010 - 2014; (Team size: 20+);</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

const Experience = () => {
  return (
    <>
      <div className="font-bold">Experience</div>
      <Contractor />
      <OnSite />
    </>
  )
}

export default Experience
