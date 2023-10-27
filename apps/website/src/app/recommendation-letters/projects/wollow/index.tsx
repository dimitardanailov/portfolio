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
      <div>
        <p>
          Dimitar has proven to every colleague that he is capable of managing
          the workflow in a team from the documentation stage, development of
          the software, meetings with clients, to delivering the product to the
          client! It was a pleasure to work, being taught and assisted by him.
        </p>
      </div>
      <div>
        <p>
          Dimitar is an excellent programmer and soul of the team. I am glad
          that I be given the opportunity to recommend it because I have a very
          positive impression of his personality. We spent over a year and a
          half working together in 158ltd.com. and in that time he managed to
          pass me a lot of knowledge in the IT field. Whenever I needed help or
          advice he has responded and helped me. I'm sure Dimitar would be a
          great part of every team.
        </p>
      </div>
    </>
  )
}

export default Letter
