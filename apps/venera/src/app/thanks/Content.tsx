'use client'

import Slogan from '@/styled-components/Slogan'
import List from './components/List'

const Content = () => {
  return (
    <>
      <Slogan>Thank you! 💖</Slogan>

      <p>
        I am so thankful to all the wonderful people and companies supporting my
        open source work on!
      </p>

      <List title="Sponsors" />
      <List title="Platinum Supporters" />
      <List title="Gold Supporters" />
      <List title="Supporters" />
    </>
  )
}

export default Content
