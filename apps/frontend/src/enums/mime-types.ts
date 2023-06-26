import FileType from './file-types'

const MimeTypes = new Map()
MimeTypes.set(FileType.PDF, ['application/pdf'])
MimeTypes.set(FileType.EXCEL, [
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
])
MimeTypes.set(FileType.WORD, [
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
])

export default MimeTypes
