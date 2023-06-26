import {Dispatch, SetStateAction} from 'react'

import {IPFSFile, AppTimeout} from '@/classes'
import AttachmentType from '@/enums/attachment-types'
import {StateProps} from '@/props/attachments/ipfs'
import {FileUploadFileType} from './request'

export interface CustomTableRowProps {
  file: IPFSFile
  attachments: IPFSFile[]
  setAttachments: any
  delay: number
  fileUploadFile: FileUploadFileType
}

export interface RenderFileUploadCanidatesProps extends StateProps {
  type: AttachmentType
  delay: number
  fileUploadFile: FileUploadFileType
}
