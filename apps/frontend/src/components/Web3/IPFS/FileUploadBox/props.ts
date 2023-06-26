import {AttachmentType, FileType} from '@/enums'
import IPFSFile from '@/classes/ipfs-file'

import {BaseProps} from '@/props/attachments/ipfs'
import type {FileUploadFileType} from './components/request'

export interface IPFSFileUploadBoxProps extends BaseProps {
  delay: number
  fileUploadFile: FileUploadFileType
}

export interface UploadComponentProps extends BaseProps {
  uploadButtonText: string
  id: string
}
