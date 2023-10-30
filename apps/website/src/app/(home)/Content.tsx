'use client'

import {Slogan} from '@/styled-components'
import {Experience, Accomplishments, Skills} from './components'

const Content = () => {
  return (
    <>
      <Slogan>
        <span className="active-color">Deep understanding </span>
        for <span className="active-color">upcoming technologies</span> to solve
        <span className="active-color"> complex business problems</span>
      </Slogan>
      <Accomplishments />
      <Experience />
      <Skills />
    </>
  )
}

export default Content
