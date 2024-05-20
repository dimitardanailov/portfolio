'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/getcraft/alex'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo name="Alex Miller" source={source} title="CTO GetCraft" />
      <div>
        <p>
          I very much enjoyed working with Dimitar over the course of about a
          year. He is a strong technical lead always pushing the envelope to do
          new things and `&ldquo;`correct things`&rdquo;`
        </p>
        <p>
          1. Dimitar is well organized and always on top of ticket workflow,
          meeting notes, weekly summaries, etc - and makes a point that
          everything should have oversight for the team as well.
        </p>
        <p>
          2. He won`&ldquo;`t hesitate to bring up new technologies or do things
          `&ldquo;`the right way`&rdquo;` - from unit testing to site speed
          monitoring to code refactoring, he is always a proponent of these
          important engineering goals.
        </p>
      </div>
    </>
  )
}

export default Letter
