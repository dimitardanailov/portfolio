'use client'

import {FC} from 'react'

import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
} from '../../components'

const AsianAbsoluteLetter: FC = () => {
  return (
    <>
      <ProjectTitle title="AsianAbsolute.com" href="/" />
      <Industry text="Translation Agency" />
      <MarketPlace text="Worldwide" />
      <HeadQuater text="Australia and UK" />
      <Position text="Software Consultant" />
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
    </>
  )
}

export default AsianAbsoluteLetter
