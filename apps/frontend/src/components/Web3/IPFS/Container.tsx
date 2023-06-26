import {FC} from 'react'

import IPFSFileUploadBox from '@/components/Web3/IPFS/FileUploadBox'
import {BaseProps as IPFSUploadBaseProps} from '@/props/attachments/ipfs'
import ExternalAttachmentStorage from './Storage'
import {
  styleGuideDowloadFile,
  styleGuideDeleteFileFromDatabase,
} from './Storage/requests'

export const IPFSContainer: FC<IPFSUploadBaseProps> = ({
  attachments,
  setAttachments,
  allowedFiles,
  maximumFileUploadInMb,
  type,
  id,
}) => {
  return (
    <>
      <ExternalAttachmentStorage
        attachments={attachments}
        setAttachments={setAttachments}
        delay={0}
        deleteFileFromDatabase={styleGuideDeleteFileFromDatabase}
        downloadAttachmentHandler={styleGuideDowloadFile}
      />
      <IPFSFileUploadBox
        allowedFiles={allowedFiles}
        attachments={attachments}
        setAttachments={setAttachments}
        maximumFileUploadInMb={maximumFileUploadInMb}
        type={type}
        id={id}
      />
    </>
  )
}

export default IPFSContainer
