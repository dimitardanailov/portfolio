'use client'

const conttainerClassName = 'mx-2'

import {listStyle} from '../shared'

const PartTime = () => {
  return (
    <div className={conttainerClassName}>
      <section>Part time positions</section>
      <ul className={listStyle}>
        <li>Independent Consultant, Fleetpal.com: 2021 - 2023</li>
        <li>Azure and .Net Software Consultant, Asian Absolute: 2012 - 2020</li>
      </ul>
    </div>
  )
}

export default PartTime
