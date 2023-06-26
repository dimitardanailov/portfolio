import {useState, FC} from 'react'

import IPFSFile from '@/classes/ipfs-file'

import IPFSFileUploadBox from '@/components/Web3/IPFS/FileUploadBox'

export interface IPFSContainerProps {
  maximumFileUploadInMb: number
  attachments: IPFSFile[]
  setAttachments: any
}

export const IPFSContainer: FC<IPFSContainerProps> = ({
  maximumFileUploadInMb,
  attachments,
  setAttachments,
}) => {
  return <IPFSFileUploadBox maximumFileUploadInMb={maximumFileUploadInMb} />
}

export default IPFSContainer
