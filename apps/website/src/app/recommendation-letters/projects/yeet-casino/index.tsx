'use client'

import {FC} from 'react'

import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
  PersonInfo,
  Technologies,
} from '../../components'

import source from '@/data/testimonials/images/yeet-casino/dan'

const Letter: FC = () => {
  return (
    <>
      <ProjectTitle title="Yeet.com" href="https://yeet.com/" />
      <Industry text="Crypto casino" />
      <MarketPlace text="USA" />
      <HeadQuater text="USA" />
      <Position text="Senior full stack Javascript Engineer" />
      <Technologies technologies="Nodejs" />
      <PersonInfo
        name="Dan Stark"
        source={source}
        title="VP of Engineering @ YEET Casino"
      />
      <p>
        Dimitar worked as a senior full stack javascript engineer on our team.
        In his time in this role, he quickly understood our technical stack, had
        helpful recommendations for the latest tools and technologies, and was
        able to add a ton of testing infrastructure that our project was
        lacking. He is an exceptional communicator, and always found ways to be
        helpful, even when he was blocked. I would highly recommend Dimitar to
        anyone who is in need of an experienced full stack engineer.
      </p>
    </>
  )
}

export default Letter
