'use client'

import Position from '@/types/Position'

import ExperiencePosition from '@/components/ExperiencePosition'

import {contractPositions} from '@/app/positions/db'

import {listStyle} from '../shared'

const conttainerClassName = 'mx-2'

const Roles = () => {
  const roles = Array.from(contractPositions.values())

  return roles.map((position: Position) => {
    return (
      <li key={position.sufix}>
        <ExperiencePosition position={position} />
      </li>
    )
  })
}

const Contractor = () => {
  return (
    <div className={conttainerClassName}>
      <section>Remote B2B Contractor (2018 - present)</section>
      <ul className={listStyle}>
        <Roles />
      </ul>
    </div>
  )
}

const OnSite = () => {
  return (
    <div className={conttainerClassName}>
      <section>On site employment: 2010 - 2018</section>
      <ul className={listStyle}>
        <li>Technical Architect, LiveArea: 2017 - 2018; (Team size: 10+);</li>
        <li>
          Full Stack Software Architect, Mentormate: 2015 - 2017; (Team size:
          100+);
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
