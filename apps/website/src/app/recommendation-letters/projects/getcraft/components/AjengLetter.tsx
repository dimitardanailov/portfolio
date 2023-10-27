'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/getcraft/ajengPuspa'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo
        name="Ajeng Puspa"
        source={source}
        title="Senior Frontend Developer at Populix"
      />
      <div>
        <p>
          Dimitar is an expert programmer & skilful executor. He always keeps
          up-to-date about the latest techniques in development & dedicated to
          providing quality work. His energy is unlimited and his enthusiasm
          motivates everyone on his team (including me!). I believe that he can
          meet any challenge & I believe everyone would be exceedingly pleased
          with his work.
        </p>
      </div>
    </>
  )
}

export default Letter
