'use client'

import {FC} from 'react'

import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
} from '../../components'

const Letter: FC = () => {
  return (
    <>
      <ProjectTitle title="fleetpal.io" href="https://www.fleetpal.io" />
      <Industry text="Maintenance and Logistics" />
      <MarketPlace text="USA" />
      <HeadQuater text="USA and Israel" />
      <Position text="Software Consultant" />
      <p>
        Dimitar is a very professional and experienced developer and consultant.
        His knowledge spreads across multiple industries, and it is not limited
        to technology. I highly recommend his services.
      </p>
    </>
  )
}

export default Letter
