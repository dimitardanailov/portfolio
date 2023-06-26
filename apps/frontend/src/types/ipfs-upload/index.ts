import {Dispatch, SetStateAction} from 'react'

import IPFSFile from '@/classes/ipfs-file'

export type IPFSUploadFileType = (
  attachments: IPFSFile[],
  file: IPFSFile,
  setAttachments: Dispatch<SetStateAction<IPFSFile[]>>,
) => void
