import {AttachmentType, FileType} from '@/enums'

interface DocumentUI {
  id: string
  documentTitle: string
  uploadOn: string
  uploadedBy: string
  uploadedByFullName: string
  attachmentType: AttachmentType
  fileExtensionType: FileType
  downloadUrl: string
}

export default DocumentUI
