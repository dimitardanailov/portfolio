'use client'

import Collinson from './full-stack-engineer-collinson/Content'
import SiemensEnergy from './blockchain-architect-siemens-energy/Content'
import Propine from './blockchain-staff-engineer-propine/Content'

import styled from 'styled-components'

const Divider = styled.span`
  position: relative;

  display: block;
  margin: 0 auto;
  width: 100%;

  margin-top: 1rem;
  margin-bottom: 1.5rem;
`

const Content = () => {
  return (
    <>
      <Collinson />
      <Divider />
      <SiemensEnergy />
      <Divider />
      <Propine />
    </>
  )
}

export default Content
