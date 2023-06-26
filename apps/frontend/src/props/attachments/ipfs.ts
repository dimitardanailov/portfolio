import {Dispatch, SetStateAction} from 'react'
import IPFSFile from '@/classes/ipfs-file'
import {IPFSUploadFileType} from '@/types/ipfs-upload'
import {AttachmentType, FileType} from '@/enums'

export interface StateProps {
  attachments: IPFSFile[]
  setAttachments: Dispatch<SetStateAction<IPFSFile[]>>
}

export interface BaseProps extends StateProps {
  allowedFiles: FileType[]
  maximumFileUploadInMb: number
  type: AttachmentType
  id: string
}

export interface FileUploadProps extends StateProps {
  // fileUploadFile: IPFSUploadFileType
}
