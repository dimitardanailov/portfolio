'use client'

import styled from 'styled-components'

import BasicButton from '@/styled-components/Buttons/BasicButton'

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  flex-direction: center;
  justify-content: space-end;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`

const StyledButton = styled(BasicButton)`
  margin-left: auto;
`

const PageHeaderContainer = () => {
  return (
    <Wrapper>
      <StyledButton type="button" fontSize="1.2rem" padding="1rem 2rem">
        Refresh
      </StyledButton>
    </Wrapper>
  )
}

export default PageHeaderContainer