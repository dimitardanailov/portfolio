'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/wollow/hristo'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo
        name="Hristo Georgiev"
        source={source}
        title="Software Engineer at Avrios | Former Founder of Centroida"
      />
      <div>
        <p>
          Dimitar is an outstanding mentor. His guidance helped me progress with
          Ruby on Rails with ease and discover more about developing web-based
          software. Even after my internship at wollow-soft ended, he continued
          assisting me with advice. Definitely a great person to learn from and
          to work with!
        </p>
      </div>
    </>
  )
}

export default Letter
