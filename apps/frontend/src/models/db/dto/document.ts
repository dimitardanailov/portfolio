import {DBAttachmentType} from '@/enums'

export interface DBDocumentDTO {
  id: string
  fileName: string
  type: DBAttachmentType
  createdDate: string
  createdBy: string
  createdByFullName: string
  contentType: string
}

export interface DBDocumentUploadDTO extends DBDocumentDTO {
  data: string
}

export default DBDocumentDTO
