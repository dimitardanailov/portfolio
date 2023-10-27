'use client'

import {FC} from 'react'

import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
} from '../../components'

import {
  AlexLetter,
  FannyLetter,
  BayuLetter,
  MarselLetter,
  AjengLetter,
} from './components'

const Letter: FC = () => {
  return (
    <>
      <ProjectTitle title="getcraft.com" href="https://www.getcraft.com" />
      <Industry text="Creator Directory, Job Portal" />
      <MarketPlace text="Singapore, Indonesia, Malaysia, Vietnam, China and Australia" />
      <HeadQuater text="Indonesia" />
      <Position text="Software Consultant" />
      <AlexLetter />
      <FannyLetter />
      <BayuLetter />
      <MarselLetter />
      <AjengLetter />
    </>
  )
}

export default Letter
