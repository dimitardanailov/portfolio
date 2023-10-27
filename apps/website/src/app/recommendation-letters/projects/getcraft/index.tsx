'use client'

import {FC} from 'react'

import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
} from '../../components'

import {AlexLetter} from './components'

const Letter: FC = () => {
  return (
    <>
      <ProjectTitle title="getcraft.com" href="https://www.getcraft.com" />
      <Industry text="Creator Directory, Job Portal" />
      <MarketPlace text="Singapore, Indonesia, Malaysia, Vietnam, China and Australia" />
      <HeadQuater text="Indonesia" />
      <Position text="Software Consultant" />
      <AlexLetter />
      <div>
        <p>
          Being a non-technical lead PM, there are a number of instances where I
          absolutely commend Dimitar taking the time in preparations visually
          and verbally to share his perspectives, recommendations and solutions,
          facilitating to helping me personally understand and navigate (tech)
          better, with a goal of improving the process between design and
          development. His positive agenda is to always continue to improve the
          performance and usability of our platform, with our users experience
          in mind. Where communication can certainly sometimes prove to be
          challenging over the initial teething period of us working with other
          coming from different countries, there has been good personal and
          professional rapport established over time, with a good number of
          laughs and in tow over the last few months of collaborations. Projects
          I have worked on with him being getting our new homepage up with the
          authentication and navigations, and recently our managed services
          feature for sales activations. No matter what the problem is, Dimitar
          always starts with the right question, ie. 'Why?'. Dimitar knowledge
          shares, keeping us updated on progress and adds diversity to the way
          solutions are discovered. I have appreciated the time we have worked
          together and sincerely thank Dimitar.
        </p>
      </div>
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
