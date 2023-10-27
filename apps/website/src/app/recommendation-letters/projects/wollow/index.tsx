'use client'

import {FC} from 'react'

import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
} from '../../components'

import {IvelinLetter, MoLetter} from './components'

const Letter: FC = () => {
  return (
    <>
      <ProjectTitle
        title="wollow-soft.com"
        href="https://www.wollow-soft.com"
      />
      <Industry text="Software provider" />
      <MarketPlace text="USA, Europe and Australia" />
      <HeadQuater text="Bulgaria" />
      <Position text="Software Engineer, Team Lead and CTO" />
      <IvelinLetter />
      <MoLetter />
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
      <div>
        <p>
          Dimitar is an outstanding mentor. His guidance helped me progress with
          Ruby on Rails with ease and discover more about developing web-based
          software. Even after my internship at wollow-soft ended, he continued
          assisting me with advice. Definitely a great person to learn from and
          to work with!
        </p>
      </div>
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
      <div>
        <p>
          Dimitar has proven to every colleague that he is capable of managing
          the workflow in a team from the documentation stage, development of
          the software, meetings with clients, to delivering the product to the
          client! It was a pleasure to work, being taught and assisted by him.
        </p>
      </div>
      <div>
        <p>
          Dimitar is an excellent programmer and soul of the team. I am glad
          that I be given the opportunity to recommend it because I have a very
          positive impression of his personality. We spent over a year and a
          half working together in 158ltd.com. and in that time he managed to
          pass me a lot of knowledge in the IT field. Whenever I needed help or
          advice he has responded and helped me. I'm sure Dimitar would be a
          great part of every team.
        </p>
      </div>
    </>
  )
}

export default Letter
