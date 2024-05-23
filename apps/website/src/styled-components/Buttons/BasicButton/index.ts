import styled from 'styled-components'

import themes from '@/styles/configurations/dark'

export interface Props {
  padding: string
  fontSize: string
}

const Button = styled.button<Props>`
  position: relative;

  display: block;
  padding: ${props => props.padding};
  font-size: ${props => props.fontSize};
  border-radius: 0.5rem;
  border: none;
  background-color: ${themes.secondary.main};
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${themes.secondary.dark};
    color: #fff;
  }
`

export default Button
