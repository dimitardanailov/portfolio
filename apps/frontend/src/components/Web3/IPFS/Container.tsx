import {FC} from 'react'

import IPFSFileUploadBox from '@/components/Web3/IPFS/FileUploadBox'
import {BaseProps as IPFSUploadBaseProps} from '@/props/attachments/ipfs'

export const IPFSContainer: FC<IPFSUploadBaseProps> = ({
  attachments,
  setAttachments,
  allowedFiles,
  maximumFileUploadInMb,
  type,
  id,
}) => {
  return (
    <IPFSFileUploadBox
      allowedFiles={allowedFiles}
      attachments={attachments}
      setAttachments={setAttachments}
      maximumFileUploadInMb={maximumFileUploadInMb}
      type={type}
      id={id}
    />
  )
}

export default IPFSContainer
