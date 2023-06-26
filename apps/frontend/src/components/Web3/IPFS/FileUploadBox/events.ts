import {ChangeEvent} from 'react'
import IPFSFile from '@/classes/ipfs-file'
import AttachmentType from '@/enums/attachment-types'

function onChangeFileListener(
  e: ChangeEvent<HTMLInputElement>,
  setAttachments: Function,
  maximumFileUploadInBytes: number,
  type: AttachmentType,
) {
  if (e.target.files && e.target.files.length > 0) {
    const file: File = e.target.files[0]

    setAttachments(function (files: IPFSFile[]) {
      const newAttachment = new IPFSFile(file, type, maximumFileUploadInBytes)
      const newFiles = [newAttachment, ...files]

      return newFiles
    })
  }
}

export {onChangeFileListener}
