'use client'

import {Slogan} from '@/styled-components'
import {Documents, WhyMe, Expertise, ArrangeMeeting} from './components'

const Content = () => {
  return (
    <>
      <Slogan>
        <span className="active-color">14 years</span> of{' '}
        <span className="active-color">helping</span> build an inclusive{' '}
        <span className="active-color">web2</span> or{' '}
        <span className="active-color">web3</span> projects
      </Slogan>
      <WhyMe />
      <Expertise />
      <Documents />
      <ArrangeMeeting />
    </>
  )
}

export default Content
