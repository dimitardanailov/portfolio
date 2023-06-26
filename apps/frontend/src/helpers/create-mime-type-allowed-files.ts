import {FileType, MimeTypes} from '@/enums'

/**
 * The goal is to create an array with All allowed MimeTypes
 */
export function createMimeTypeAllowedFiles(_fileTypes: FileType[]) {
  let allowedFiles: string[] = []

  _fileTypes.forEach(fileType => {
    const rowMimeTypes = MimeTypes.get(fileType)
    allowedFiles = allowedFiles.concat(rowMimeTypes)
  })

  return allowedFiles
}
