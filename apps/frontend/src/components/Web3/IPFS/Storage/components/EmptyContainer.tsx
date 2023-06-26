import styled from 'styled-components'

import {InnerStyledWrapper} from '@/styled-components/file-upload'

const StyledWrapper = styled(InnerStyledWrapper)`
  border-left-style: solid;
  border-left-color: #c2c2c2;
  border-left-width: 9px;
`

const Text = styled.span`
  position: relative;

  color: #333;
  margin-left: 12.5px;
`

function EmptyContainer() {
  return (
    <StyledWrapper bgcolor="#f2f2f2" border="#c2c2c2">
      <Text>No Content</Text>
    </StyledWrapper>
  )
}

export default EmptyContainer
