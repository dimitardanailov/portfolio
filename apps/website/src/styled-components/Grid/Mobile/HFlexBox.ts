import styled from 'styled-components'
import ParentComponent from '../HFlexBox'

const Box = styled(ParentComponent)`
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export default Box
