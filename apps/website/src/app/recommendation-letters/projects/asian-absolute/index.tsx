'use client'

import {FC} from 'react'

import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
  PersonInfo,
} from '../../components'

import source from '@/data/testimonials/images/asianabsolute/henry'

const Letter: FC = () => {
  return (
    <>
      <ProjectTitle title="AsianAbsolute.com" href="/" />
      <Industry text="Translation Agency" />
      <MarketPlace text="Worldwide" />
      <HeadQuater text="Australia and UK" />
      <Position text="Software Consultant" />
      <PersonInfo
        name="Wong Liang Zan"
        source={source}
        title="Consultant. Former: Chairperson, Asian Absolute | Translation and Localisation Services"
      />
      <p>#1 (Year: 2020)</p>
      <p>
        For 7 years Dimitar masterminded the development of the web app which I
        used to run most aspects of my language services business. We were not
        an easy client but he found an elegant solution for each one of the
        challenges which our business threw at him. He imposed structure and
        efficiency on our in-house, agency and freelance dev teams and
        introduced a series of new tools and technologies to make the app more
        resilient and effective. He&rsquos an accomplished software architect
        but he doesn&rsquot hesitate to roll his sleeves up and debug code in
        the middle of the night when that&rsquos what&rsquos needed. Dimitar is
        a highly intelligent and knowledgeable professional with an exemplary
        work ethic
      </p>
      <p>#2 (Year: 2015)</p>
      <p>
        Dimitar Danailov led the development work on our primary project
        management and production application from 2013 to 2015. He and his team
        took over the responsibility for supporting and updating our existing
        application written in VB on ASP.NET, and they developed a new
        application written in C# on ASP.NET MVC. Both applications ran on
        Microsoft Azure and used a SQL database. The applications covered
        functionality ranging from CRM, a vendor database, production tasks for
        our operations team working on translation and localisation projects,
        and finance. I was impressed by Dimitar’s technical skills – as a
        solutions architect designing both front-end and back-end, his efficient
        coding and his ability to propose elegant solutions to meet our
        requirements. Dimitar was proactive in suggesting new technical
        approaches to overcome our particular challenges and I appreciated his
        willingness to research new technologies specifically for our project.
        Dimitar displayed admirable personal commitment in investing his
        personal time to work on our project and I considered him a true partner
        in our endeavor. I have no hesitation in recommending Dimitar and I am
        confident that he will be an asset to any employer."
      </p>
    </>
  )
}

export default Letter
