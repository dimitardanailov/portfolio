'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/wollow/ivelin'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo name="Ivelin Ivanov" source={source} title="Company Owner" />
      <div>
        <p>
          I am writing this recommendation for Dimitar Danailov with great
          pleasure and respect. Dimitar has worked for me and with me for more
          than five years at https://wollow-soft.com. He has started as a
          programmer and passed all the levels to CTO in the last year. In terms
          of technical skills, he has an undeniable qualification, but for me
          and for the company he was highly esteemed for his loyalty and
          devotion. He is a person with whom I have worked with pleasure and I
          have had unreserved confidence in him, since we have managed more than
          100 projects in time and he has proven his competence and his ability
          to work on time and with quality. Rarely, we can meet people strongly
          devoted to their work, however Dimitar is one of them, and the
          priceless thing for him is that he transfers his energy and knowledge
          to the team, motivates them and he is one good example. Since the
          beginning he has demonstrated a strict compliance to the working
          processes and rules of the company. By taking the position of CTO in
          wollow-soft.com. Together with his help we have built the team from
          the base of three programmers to the current 28. Over the past years,
          we have participated in many risky projects and in his face I have
          always had a confidential and pragmatic partner in making quick and
          right decisions. In conclusion, let me say that without hesitation I
          recommend Dimitar Danailov for the position of lead programmer,
          related to software development. I am sure that he is going to be an
          invaluable asset for your organization. If you would like to discuss
          further my opinion and assessment of Dimitar, please do not hesitate
          to contact me.
        </p>
      </div>
    </>
  )
}

export default Letter
