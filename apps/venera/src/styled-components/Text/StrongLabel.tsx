import styled from 'styled-components'
import BaseTitle from '@/styled-components/Text/Title'

export interface Props {
  width: number
}

const Label = styled(BaseTitle)<Props>`
  font-size: 1rem;
  font-weight: bold;
  min-width: ${p => `${p.width}px`};
`

export default Label
