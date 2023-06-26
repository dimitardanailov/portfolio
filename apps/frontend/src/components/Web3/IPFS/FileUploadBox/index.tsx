import {FC, useState} from 'react'

import IPFSFile from '@/classes/ipfs-file'

export interface IPFSFileUploadBox {
  maximumFileUploadInMb: number
}

export const IPFSFileUploadBox: FC<IPFSFileUploadBox> = ({
  maximumFileUploadInMb,
}) => {
  const maximumFileUploadInBytes = maximumFileUploadInMb * 1024 * 1024

  return <div>IPFSFileUploadBox: {maximumFileUploadInBytes}</div>
}

export default IPFSFileUploadBox
