'use client'

import Image from 'next/image'

import styled from 'styled-components'

import {HFlexBox, VFlexbox} from '@/styled-components/Grid'

import source from '@/data/me/120x120'

const Container = styled(HFlexBox)`
  width: 100%;
  justify-content: center;
`

const CustomImage = styled(Image)`
  position: relative;

  border: 0.2rem solid #000;
  border-radius: 100%;
  margin: 0 auto;
`

const Text = styled.span`
  position: relative;
  width: 100%;

  margin-top: 1rem;
  text-align: center;
  font-size: 1.2rem;
`

const Avatar = () => {
  const size = 120
  const title = ''

  return (
    <Container>
      <VFlexbox>
        <CustomImage
          src={source}
          width={size}
          height={size}
          title={title}
          alt={title}
          loading="lazy"
        />
        <Text>I&lsquo;m Open to help you!</Text>
      </VFlexbox>
    </Container>
  )
}

export default Avatar
