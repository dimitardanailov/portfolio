'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/noImage'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo
        name="Ashton Cunningham"
        source={source}
        title="IT Manager Campion"
      />
      <div>
        <p>
          Even though my time with Dimitar was limited, I found him consistently
          pleasant, professional, and tackled all programming assignments with
          dedication and a view of total success. Besides being a joy to work
          with, Dimitar is a take - charge person who is able to present
          creative ideas and communicate the benefits. I highly recommend
          Dimitar for employment. He is a team player and would make a great
          asset to any organization.
        </p>
      </div>
    </>
  )
}

export default Letter
