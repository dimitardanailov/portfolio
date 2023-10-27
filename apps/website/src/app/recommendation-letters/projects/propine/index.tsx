'use client'

import {FC} from 'react'
import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
} from '../../components'
import {Keyword} from '@/components/SEO'

const PropineLetter: FC = () => {
  return (
    <>
      <ProjectTitle title="Propine.com" href="https://propine.com/" />
      <Industry text="Fintech and Blockchain" />
      <MarketPlace text="Worldwide and Singapore" />
      <HeadQuater text="Singapore and USA" />
      <Position text="Blockchain Staff Engineer" />
      <p>
        Mr Dimitar Danailov was employed at Propine Technologies Pte Ltd from
        September 1 2021 to August 5 2022 as a{' '}
        <Keyword word="Blockchain Staff Engineer" /> . During his time with us,
        he has proven to be a reliable colleague. His strong work ethic has set
        a great example to the rest of the team. We would wholeheartedly
        recommend him in whatever endeavors he so chooses.”
      </p>
    </>
  )
}

export default PropineLetter
