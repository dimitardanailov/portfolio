'use client'

import {FC} from 'react'

import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
} from '../../components'

import DavidLetter from './components/DavidLetter'

const Letter: FC = () => {
  return (
    <>
      <ProjectTitle
        title="Elephantstock.com"
        href="https://www.elephantstock.com/"
      />
      <Industry text="eCommerce" />
      <MarketPlace text="USA" />
      <HeadQuater text="USA and Israel" />
      <Position text="Software Engineering Manager / Team Lead" />
      <DavidLetter />
      <p>
        I worked with similar in the same team, it was a pleasure working with
        him. Dimitar brings lots of experience and a wide range of dev
        knowledge, he has the ability to see the wide picture while paying
        attention to the small details.
      </p>
    </>
  )
}

export default Letter
