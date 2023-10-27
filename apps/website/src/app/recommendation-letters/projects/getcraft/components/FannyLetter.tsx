'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/getcraft/fanny'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo
        name="Fanny Yap"
        source={source}
        title="Product Manager GetCraft"
      />
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
    </>
  )
}

export default Letter
