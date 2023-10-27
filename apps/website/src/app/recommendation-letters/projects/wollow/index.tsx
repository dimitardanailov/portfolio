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
      <VladimirLetter />
      <div>
        <p>
          Dimitar has proven to every colleague that he is capable of managing
          the workflow in a team from the documentation stage, development of
          the software, meetings with clients, to delivering the product to the
          client! It was a pleasure to work, being taught and assisted by him.
        </p>
      </div>
    </>
  )
}

export default Letter
