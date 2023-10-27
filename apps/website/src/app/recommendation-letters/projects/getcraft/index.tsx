'use client'

import {FC} from 'react'

import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
} from '../../components'

import {AlexLetter, FannyLetter} from './components'

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
      <div>
        With his experience, Mitco able to show awesome skill, knowledge and
        critical thinking during working with him. He could play solo and also
        collaboratively which making him easier to adapt various condition and
        challenge. He also loves to give some advice during discussion and in
        the same time open for any input which making us grow together as a
        team. Will all of this experience, I believe he would be a great asset
        to any company or team. Good luck Mitco!!!
      </div>
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
