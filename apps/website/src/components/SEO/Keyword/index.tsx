import {FC} from 'react'
import styled from 'styled-components'

const Wrapper = styled.strong``

interface Props {
  word: string
}

const Layout: FC<Props> = ({word}) => {
  return <Wrapper>{word}</Wrapper>
}

export default Layout
