'use client'

import {Slogan} from '@/styled-components'
import {Certficates, Specilizations} from './components'

const Content = () => {
  return (
    <>
      <Slogan>
        <span className="active-color">13 years</span> of{' '}
        <span className="active-color">helping</span> build an inclusive{' '}
        <span className="active-color">web2</span> or{' '}
        <span className="active-color">web3</span> projects
      </Slogan>
      <Specilizations />
      <Certficates />
    </>
  )
}

export default Content
