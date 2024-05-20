'use client'

import {FC} from 'react'

import Link from 'next/link'

import {FaGithub, FaStackOverflow, FaLinkedin} from 'react-icons/fa'

import HFlexBox from '@/styled-components/Grid/HFlexBox'

import styled from 'styled-components'

const Container = styled(HFlexBox)`
  justify-content: center;
  width: 100%;

  margin: 1rem 0;
`

const InternalContainer = styled(HFlexBox)`
  justify-content: space-around;
  width: 120px;
`

const Icons: FC = () => {
  const size = 32

  return (
    <Container>
      <InternalContainer>
        <Link
          href="https://www.linkedin.com/in/venerasokolova/"
          target="_blank"
          title="Linkedin profile"
        >
          <FaLinkedin size={size} />
        </Link>
      </InternalContainer>
    </Container>
  )
}

export default Icons
