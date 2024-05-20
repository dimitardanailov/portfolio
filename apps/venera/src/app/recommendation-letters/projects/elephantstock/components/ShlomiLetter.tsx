'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/elephantstock/shlomi'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo name="Shlomi Cohen" source={source} title="Product Manager" />
      <div>
        <p>
          I worked with similar in the same team, it was a pleasure working with
          him. Dimitar brings lots of experience and a wide range of dev
          knowledge, he has the ability to see the wide picture while paying
          attention to the small details.
        </p>
      </div>
    </>
  )
}

export default Letter
