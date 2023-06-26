import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  display: block;
  margin: 1rem 0 2rem;
`

const WrapperButttons = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

interface ButtonProps {
  disabled?: boolean
}

const BasicButton = styled.button<ButtonProps>`
  position: relative;

  display: flex;
  padding: 0.5rem;

  opacity: ${props => (props.disabled ? 0.4 : 1)};
  border: 1px solid;
`

const UploadButton = styled(BasicButton)<ButtonProps>`
  color: #aa1e38;
  background-color: #f5f5f5;
  border-color: #aa1e38;
`

const CancelButton = styled(BasicButton)<ButtonProps>`
  margin: 0 0.3rem;
`

const TrashButton = styled(BasicButton)<ButtonProps>`
  color: #333;
  background-color: #f5f5f5;
  border-color: #e8e8e8;
`

export {Wrapper, WrapperButttons, UploadButton, CancelButton, TrashButton}
