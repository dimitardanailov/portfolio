'use client'

import {Slogan} from '@/styled-components'
import {WhyMe, Expertise} from './components'

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
    </>
  )
}

export default Content
