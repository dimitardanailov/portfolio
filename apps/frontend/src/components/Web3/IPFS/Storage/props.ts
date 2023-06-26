import {StateProps} from '@/props/attachments/ipfs'
import {DeleteFileFromDatabaseType, DownloadFileByType} from './requests'

export interface AttachmentStorageProps extends StateProps {
  deleteFileFromDatabase: DeleteFileFromDatabaseType
  delay?: number
  downloadAttachmentHandler: DownloadFileByType
}
