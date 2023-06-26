import styled from 'styled-components'

const ExternalStyledWrapper = styled.div`
  position: relative;

  display: block;
  width: 100%;
  margin: 0 auto;

  border: 1px solid #e7ecf1;
  background-color: #fff;
`

interface InnerStyledWrapperProps {
  bgcolor: string
  border: string
}

const InnerStyledWrapper = styled.div<InnerStyledWrapperProps>`
  position: relative;

  display: block;
  margin: 0.5rem;
  padding: 0.5rem;

  background-color: ${props => props.bgcolor};
  border: ${props => props.border};
`

export {ExternalStyledWrapper, InnerStyledWrapper}
