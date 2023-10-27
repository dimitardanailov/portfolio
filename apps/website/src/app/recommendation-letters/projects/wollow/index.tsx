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
  IvelinLetter,
  MoLetter,
  AshtonLetter,
  HristoLetter,
  TsvetanLetter,
  VladimirLetter,
  AntoanLetter,
} from './components'

const Letter: FC = () => {
  return (
    <>
      <ProjectTitle
        title="wollow-soft.com"
        href="https://www.wollow-soft.com"
      />
      <Industry text="Software provider" />
      <MarketPlace text="USA, Europe and Australia" />
      <HeadQuater text="Bulgaria" />
      <Position text="Software Engineer, Team Lead and CTO" />
      <IvelinLetter />
      <MoLetter />
      <AshtonLetter />
      <HristoLetter />
      <TsvetanLetter />
      <AntoanLetter />
      <VladimirLetter />
    </>
  )
}

export default Letter
