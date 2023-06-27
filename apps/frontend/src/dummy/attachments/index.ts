import DocumentUI from '@/models/ui/ipfs/DocumentUI'

import {AttachmentType, UIAttachmentRole, FileType} from '@/enums'
import {IPFSFile} from '@/classes'

function createData(
  numericId: string,
  documentTitle: string,
  uploadOn: string,
  uploadedBy: string,
  attachmentType: AttachmentType,
  fileExtensionType: FileType,
): DocumentUI {
  const id = `${attachmentType.toLowerCase()}-${fileExtensionType.toLowerCase()}-${numericId}`
  const downloadUrl = 'https://www.africau.edu/images/default/sample.pdf'

  return {
    id,
    documentTitle,
    uploadOn,
    uploadedBy,
    uploadedByFullName: uploadedBy,
    attachmentType,
    fileExtensionType,
    downloadUrl,
  }
}

function getAttachments() {
  return [
    createData(
      '1',
      'India.pdf',
      '28-11-2022',
      'Nelson Mandela',
      AttachmentType.Attachment,
      FileType.PDF,
    ),
    createData(
      '2',
      'China.docx',
      '25-11-2022',
      'Nelson Mandela',
      AttachmentType.Annex,
      FileType.WORD,
    ),
    createData(
      '3',
      'Italy.pdf',
      '20-11-2022',
      'Mother Teresa',
      AttachmentType.Attachment,
      FileType.PDF,
    ),
    createData(
      '4',
      'UnitedStates.xlsx',
      '20-11-2022',
      'Nelson Mandela',
      AttachmentType.Annex,
      FileType.EXCEL,
    ),
    createData(
      '5',
      'Canada.docx',
      '20-11-2022',
      'Mother Teresa',
      AttachmentType.Attachment,
      FileType.WORD,
    ),
    createData(
      '6',
      'Australia.pdf',
      '20-11-2022',
      'Mother Teresa',
      AttachmentType.Annex,
      FileType.PDF,
    ),
    createData(
      '7',
      'Germany.pdf',
      '20-11-2022',
      'Henry Dunant',
      AttachmentType.Attachment,
      FileType.PDF,
    ),
    createData(
      '8',
      'Ireland.pdf',
      '20-11-2022',
      'Ana Cuenca',
      AttachmentType.Attachment,
      FileType.PDF,
    ),
    createData(
      '9',
      'Mexico.docx',
      '20-11-2022',
      'Ana Cuenca',
      AttachmentType.Annex,
      FileType.WORD,
    ),
    createData(
      '10',
      'Japan.pdf',
      '20-11-2022',
      'Ana Cuenca',
      AttachmentType.Annex,
      FileType.PDF,
    ),
    createData(
      '11',
      'France.pdf',
      '20-11-2022',
      'Henry Dunant',
      AttachmentType.Annex,
      FileType.PDF,
    ),
    createData(
      '12',
      'UnitedKingdom.pdf',
      '20-11-2022',
      'Henry Dunant',
      AttachmentType.Attachment,
      FileType.PDF,
    ),
    createData(
      '13',
      'Russia.xlsx',
      '19-11-2022',
      'Mother Teresa',
      AttachmentType.Attachment,
      FileType.EXCEL,
    ),
    createData(
      '14',
      'Nigeria.docx',
      '15-11-2022',
      'Mother Teresa',
      AttachmentType.Attachment,
      FileType.EXCEL,
    ),
    createData(
      '15',
      'Brazil.docx',
      '12-11-2022',
      'Mother Teresa',
      AttachmentType.Attachment,
      FileType.WORD,
    ),
  ]
}

function generateDummyAttachments(role: UIAttachmentRole): IPFSFile[] {
  const attachments = getAttachments()

  const dummyAttachments = attachments.map(
    (document: DocumentUI, index: number) => {
      const attachmentType: AttachmentType =
        index % 2 === 0 ? AttachmentType.Attachment : AttachmentType.Annex

      const customId = `${role.toLowerCase()}-${document.id}`
      document.id = customId

      const file: File = new File(['foo'], document.documentTitle, {
        type: 'text/plain',
      })

      const limitFileUploadSize = 1024 * 1024

      const pmtFile = new IPFSFile(
        file,
        attachmentType,
        limitFileUploadSize,
        document,
      )

      if (role === UIAttachmentRole.AttachmentStoredRole) {
        pmtFile.setUiAttachmentRoleToStoredRole()
      }

      return pmtFile
    },
  )

  return dummyAttachments
}

export {generateDummyAttachments}
