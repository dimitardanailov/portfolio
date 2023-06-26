import {AttachmentType, FileType} from '@/enums'
import IPFSFile from '@/classes/ipfs-file'

import {BaseProps} from '@/props/attachments/ipfs'

export interface UploadComponentProps extends BaseProps {
  id: string
  uploadButtonText: string
  // stateDocumentsAttachmentMachine?: any;
  // sendDocumentsAttachmentMachine: any;
}

export interface IPFSFileUploadBoxProps extends BaseProps {}
