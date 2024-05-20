'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/getcraft/bayu'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo
        name="I Gusti Agung Gede Bayu Puspa Nugraha"
        source={source}
        title="Senior Software Engineer at GetCraft"
      />
      <div>
        With his experience, Mitco able to show awesome skill, knowledge and
        critical thinking during working with him. He could play solo and also
        collaboratively which making him easier to adapt various condition and
        challenge. He also loves to give some advice during discussion and in
        the same time open for any input which making us grow together as a
        team. Will all of this experience, I believe he would be a great asset
        to any company or team. Good luck Mitco!!!
      </div>
    </>
  )
}

export default Letter
