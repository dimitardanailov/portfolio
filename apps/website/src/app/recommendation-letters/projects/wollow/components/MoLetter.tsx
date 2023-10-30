'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/wollow/mo'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo
        name="Mo Hamdouna"
        source={source}
        title="Founder, Creative Director"
      />
      <div>
        <p>
          It is with great pleasure that I write this letter of recommendation
          on behalf of (https://wollow-soft.com), a knowledgeable, dynamic, and
          flexible technology partner. What impressed us most about Wollow’s
          approach to our project was their vision and leadership, commitment to
          the customer, insistence on setting realistic goals, with a succinct
          timelines, organization and project management, education and
          coaching. Bar none, their cutting edge technical expertise is of
          superior quality, delivered with a business-like approach. But it was
          the &lsquo;everything else&lsquo; that completed the package.
          Wollow&lsquo;s success is due to its winning team. The initial vision,
          leadership and project management of the CEO Ivelin Ivanov paved the
          way for our project&lsquo;s success, and the technical expertise of
          the CTO Dimitar Danailov has provided a state-of-the-art platform for
          the projects we&lsquo;ve worked together on. As a company, we are
          fully satisfied with the final product that Wollow has delivered.
          Based on our experience, we would recommend to anyone interested the
          services of Wollow since they are trusted and valuable long-term
          business partner.
        </p>
      </div>
    </>
  )
}

export default Letter
