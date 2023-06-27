import {FC} from 'react'

import {StateProps} from '@/props/attachments/ipfs'
import {AttachmentType, FileType} from '@/enums'
import ExternalAttachmentStorage from '@/components/Web3/IPFS/Storage'

import {
  ExternalStyledWrapper,
  InnerStyledWrapper,
} from '@/styled-components/file-upload'

import {
  styleGuideDowloadFile,
  styleGuideDeleteFileFromDatabase,
} from '@/components/Web3/IPFS/Storage/requests'
import IPFSFileUploadBox from '@/components/Web3/IPFS/FileUploadBox'

import {fileUploadFile} from '../events'

interface IPFSContainerProps extends StateProps {
  allowedFiles: FileType[]
}

const IPFSContainer: FC<IPFSContainerProps> = ({
  allowedFiles,
  attachments,
  setAttachments,
}) => {
  const maximumFileUploadInMb = 5

  return (
    <>
      <ExternalAttachmentStorage
        attachments={attachments}
        setAttachments={setAttachments}
        delay={0}
        deleteFileFromDatabase={styleGuideDeleteFileFromDatabase}
        downloadAttachmentHandler={styleGuideDowloadFile}
      />
      <ExternalStyledWrapper>
        <InnerStyledWrapper bgcolor="#fff" border="#f2f2f2">
          <IPFSFileUploadBox
            allowedFiles={allowedFiles}
            maximumFileUploadInMb={maximumFileUploadInMb}
            attachments={attachments}
            setAttachments={setAttachments}
            type={AttachmentType.Attachment}
            id={'ipfs-demo-01'}
            delay={200}
            fileUploadFile={fileUploadFile}
          />
          <IPFSFileUploadBox
            allowedFiles={allowedFiles}
            maximumFileUploadInMb={maximumFileUploadInMb}
            attachments={attachments}
            setAttachments={setAttachments}
            type={AttachmentType.Annex}
            id={'ipfs-demo-02'}
            fileUploadFile={fileUploadFile}
            delay={200}
          />
        </InnerStyledWrapper>
      </ExternalStyledWrapper>
    </>
  )
}

export default IPFSContainer
