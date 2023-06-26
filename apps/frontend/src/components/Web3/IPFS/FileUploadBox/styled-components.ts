import styled from 'styled-components'
import UploadFileIcon from '@mui/icons-material/UploadFile'

const SectionAllowedFiles = styled.section`
  posiition: relative;

  display: block;
  padding: 1rem 0;
`

const StyledUploadWrapper = styled.label`
  position: relative;

  display: inline-flex;
  flex-direction: row;
  padding: 5px 10px;
  justify-content: flex-start;
  align-items: start;

  color: #fff;
  background-color: #aa1e38;
  border-color: #aa1e38;

  cursor: pointer;
`

const StyledUploadFileIcon = styled(UploadFileIcon)`
  position: relative;

  display: inline-block;

  && {
    font-size: 18px;
    margin 2.5px 0;
  }

  > * {
    border: 1px solid red;
  }
`

const StyledUploadButtonText = styled.span`
  position: relative;

  display: inline-block;
  margin-left: 5px;
`

const StyledUploadButton = styled.input`
  display: none;
`

export {
  SectionAllowedFiles,
  StyledUploadWrapper,
  StyledUploadFileIcon,
  StyledUploadButtonText,
  StyledUploadButton,
}
