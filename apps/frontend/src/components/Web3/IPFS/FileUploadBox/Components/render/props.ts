import IPFSFile from '@/classes/ipfs-file'
import AttachmentType from '@/enums/attachment-types'
import {StateProps} from '@/props/attachments/ipfs'

export interface CustomTableRowProps {
  file: IPFSFile
  attachments: IPFSFile[]
  setAttachments: any
}

export interface RenderFileUploadCanidatesProps extends StateProps {
  type: AttachmentType
  // delay: number
}
