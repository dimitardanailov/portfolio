import {FC} from 'react'
import styled from 'styled-components'

import {ImFileEmpty, ImFilePdf, ImFileWord, ImFileExcel} from 'react-icons/im'
import {FileType} from '@/enums'

interface FileExtensionTypeComponentProps {
  fileExtensionType: FileType
}

const Wrapper = styled.div`
  position: relative;

  display: flex;
  margin-right: 5px;

  && {
    font-size: 16px;
  }
`

const FileExtensionTypeComponent: FC<FileExtensionTypeComponentProps> = ({
  fileExtensionType,
}) => {
  let FileExtensionTypeIcon

  switch (fileExtensionType) {
    case FileType.PDF:
      FileExtensionTypeIcon = <ImFilePdf />
      break
    case FileType.EXCEL:
      FileExtensionTypeIcon = <ImFileExcel />
      break
    case FileType.WORD:
      FileExtensionTypeIcon = <ImFileWord />
      break
    default:
      FileExtensionTypeIcon = <ImFileEmpty />
      break
  }

  return <Wrapper>{FileExtensionTypeIcon}</Wrapper>
}

export default FileExtensionTypeComponent
