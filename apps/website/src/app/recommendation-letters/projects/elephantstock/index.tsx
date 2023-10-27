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
import ShlomiLetter from './components/ShlomiLetter'

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
      <ShlomiLetter />
    </>
  )
}

export default Letter
