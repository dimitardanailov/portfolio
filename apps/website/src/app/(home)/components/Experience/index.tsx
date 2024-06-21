'use client'

import ContractRoles from './ContractRoles'
import OnSite from './OnSite'

import {listStyle} from '../shared'

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
