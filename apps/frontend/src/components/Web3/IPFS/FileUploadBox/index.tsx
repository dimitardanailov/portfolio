/**
 * Articles:
 *
 * https://bobbyhadz.com/blog/react-typescript-usestate-array-of-objects
 * https://codefrontend.com/file-upload-reactjs/
 * https://www.javascripttutorial.net/web-apis/javascript-filereader/
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
 */

import {FC, ChangeEvent} from 'react'

import FileType from '@/enums/file-types'
import IPFSFile from '@/classes/ipfs-file'

import {
  ExternalStyledWrapper,
  InnerStyledWrapper,
} from '@/styled-components/file-upload'

import {createMimeTypeAllowedFiles} from '@/helpers'

import {UploadComponentProps, IPFSFileUploadBoxProps} from './props'

import {
  SectionAllowedFiles,
  StyledUploadWrapper,
  StyledUploadFileIcon,
  StyledUploadButtonText,
  StyledUploadButton,
} from './styled-components'
import {onChangeFileListener} from './events'
import ExternalRenderFileUploadCanidates from './Components/render/RenderFileUploadCanidates'

const AddFileInAttachmentCandidateRoleQueue: React.FC<UploadComponentProps> = ({
  allowedFiles,
  setAttachments,
  maximumFileUploadInMb,
  type,
  // sendDocumentsAttachmentMachine,
  uploadButtonText,
  id,
}) => {
  const maximumFileUploadInBytes = maximumFileUploadInMb * 1024 * 1024
  const allowedMimeTypesRules = createMimeTypeAllowedFiles(allowedFiles)

  return (
    <StyledUploadWrapper htmlFor={id}>
      <StyledUploadFileIcon />
      <StyledUploadButtonText>{uploadButtonText}</StyledUploadButtonText>

      <StyledUploadButton
        id={id}
        type="file"
        accept={allowedMimeTypesRules.join(', ')}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChangeFileListener(
            e,
            setAttachments,
            maximumFileUploadInBytes,
            type,
          )
        }
      ></StyledUploadButton>
    </StyledUploadWrapper>
  )
}

export const IPFSFileUploadBox: FC<IPFSFileUploadBoxProps> = ({
  attachments,
  setAttachments,
  allowedFiles,
  maximumFileUploadInMb,
  type,
  id,
}) => {
  return (
    <>
      <AddFileInAttachmentCandidateRoleQueue
        id={id}
        attachments={attachments}
        maximumFileUploadInMb={maximumFileUploadInMb}
        allowedFiles={allowedFiles}
        setAttachments={setAttachments}
        uploadButtonText={'Upload'}
        type={type}
      />
      <SectionAllowedFiles>
        Authorized document types: {allowedFiles.join(',')}
      </SectionAllowedFiles>
      <ExternalRenderFileUploadCanidates
        attachments={attachments}
        setAttachments={setAttachments}
        type={type}
      />
    </>
  )
}

export default IPFSFileUploadBox
