'use client'

import {Slogan} from '@/styled-components'

import Collinson from './full-stack-engineer-collinson/Content'
import SiemensEnergy from './blockchain-architect-siemens-energy/Content'
import TheInternationRedCross from './fullstack-javascript-devops-architect/Content'
import Propine from './blockchain-staff-engineer-propine/Content'
import Elephantstock from './software-engineering-manager/Content'
import GetCraft from './software-architect-getcraft/Content'

import {experienceByYears} from '@/constants/text'

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
      <Slogan>
        <span className="active-color">{experienceByYears} years</span> of{' '}
        <span className="active-color">helping</span> build an inclusive{' '}
        <span className="active-color">web2</span> or{' '}
        <span className="active-color">web3</span> projects
      </Slogan>
      <Collinson />
      <Divider />
      <SiemensEnergy />
      <Divider />
      <TheInternationRedCross />
      <Divider />
      <Propine />
      <Divider />
      <Elephantstock />
      <Divider />
      <GetCraft />
    </>
  )
}

export default Content
