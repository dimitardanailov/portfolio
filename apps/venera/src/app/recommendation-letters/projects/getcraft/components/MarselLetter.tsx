'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/getcraft/marsel'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo
        name="Marsel Aipassa"
        source={source}
        title="Senior Software Developer"
      />
      <div>
        <p>
          Mitco, is a unique name for us Indonesian to pronounce, yet his tech
          skill is extra ordinary. He is good a communicator and a knowledgeable
          person that I can always count on to look for more information, always
          available when in need. During my time working with him, he help me
          understand the current system architecture and also teach me about
          containers and container orchestration.
        </p>
      </div>
    </>
  )
}

export default Letter
