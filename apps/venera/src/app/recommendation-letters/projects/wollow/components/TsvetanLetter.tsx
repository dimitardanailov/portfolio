'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/wollow/tsvetan'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo
        name="Tsvetan Himchev"
        source={source}
        title="Software Engineer at RWB International"
      />
      <div>
        <p>
          Dimitar is a personable individual that gets on well with those around
          him. He is focused and dedicated to producing his very best at all
          times. He has shown that he is able to deal with uncertainty and
          dislocation. He is very good software engineer knows a lot of
          technologies. Also great team leader. I recommend him highly – he will
          not let you down!
        </p>
      </div>
    </>
  )
}

export default Letter
