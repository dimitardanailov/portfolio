'use client'

import {FC} from 'react'

import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
} from '../../components'

import {AlexLetter, FannyLetter, BayuLetter, MarselLetter} from './components'

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
      <div>
        Mitco, is a unique name for us Indonesian to pronounce, yet his tech
        skill is extra ordinary. He is good a communicator and a knowledgeable
        person that I can always count on to look for more information, always
        available when in need. During my time working with him, he help me
        understand the current system architecture and also teach me about
        containers and container orchestration.
      </div>
      <div>
        Dimitar is an expert programmer & skilful executor. He always keeps
        up-to-date about the latest techniques in development & dedicated to
        providing quality work. His energy is unlimited and his enthusiasm
        motivates everyone on his team (including me!). I believe that he can
        meet any challenge & I believe everyone would be exceedingly pleased
        with his work.
      </div>
    </>
  )
}

export default Letter
