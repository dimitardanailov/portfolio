'use client'

import {FC} from 'react'

import Link from 'next/link'

import {FaGithub, FaStackOverflow} from 'react-icons/fa'

import HFlexBox from '@/styled-components/Grid/HFlexBox'

import styled from 'styled-components'

const Container = styled(HFlexBox)`
  justify-content: center;
  width: 100%;

  margin: 1rem 0;
`

const InternalContainer = styled(HFlexBox)`
  justify-content: space-around;
  width: 80px;
`

const Icons: FC = () => {
  return (
    <Container>
      <InternalContainer>
        <Link
          href="https://github.com/dimitardanailov"
          target="_blank"
          title="Please review my github profile"
        >
          <FaGithub size={32} />
        </Link>
        <Link
          href="https://stackoverflow.com/users/609707/d-danailov"
          target="_blank"
          title="Please review my stackoverflow profile"
        >
          <FaStackOverflow size={32} />
        </Link>
      </InternalContainer>
    </Container>
  )
}

export default Icons
