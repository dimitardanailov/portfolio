'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/wollow/antoan'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo
        name="Antoan Popov"
        source={source}
        title="Software Architect at MentorMate"
      />
      <div>
        <p>
          Dimitar has proven to every colleague that he is capable of managing
          the workflow in a team from the documentation stage, development of
          the software, meetings with clients, to delivering the product to the
          client! It was a pleasure to work, being taught and assisted by him
        </p>
      </div>
    </>
  )
}

export default Letter
