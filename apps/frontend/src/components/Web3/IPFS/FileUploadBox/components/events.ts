import {Dispatch, SetStateAction} from 'react'
import IPFSFile from '@/classes/ipfs-file'
import type {FileUploadFileType} from './request'
import {AppTimeout} from '@/classes'

const tryToUploadFile = (
  file: IPFSFile,
  attachments: IPFSFile[],
  setAttachments: Dispatch<SetStateAction<IPFSFile[]>>,
  delay: number,
  fileUploadFile: FileUploadFileType,
  setTimeouts: Dispatch<SetStateAction<AppTimeout[]>>,
) => {
  const updatedAttachments = attachments.map((attachment: IPFSFile) => {
    if (attachment.documentUI.id === file.documentUI.id) {
      attachment.setUploadStatusToActive()
    }

    return attachment
  })

  setAttachments(updatedAttachments)

  const timeoutId = window.setTimeout(
    fileUploadFile,
    delay,
    updatedAttachments,
    file,
    setAttachments,
  )

  const timeoutInfo = new AppTimeout(timeoutId)
  setTimeouts(prevArray => [...prevArray, timeoutInfo])
}

const cancelFileUpload = (file: IPFSFile) => {
  file.resetUploadStatus()
}

const removeFileFromTheList = (
  file: IPFSFile,
  attachments: IPFSFile[],
  setAttachments: Dispatch<SetStateAction<IPFSFile[]>>,
) => {
  file.setAttachmentToBeRemovedFromUI()

  const newAttachments = attachments.filter(function (attachment) {
    return attachment.documentUI.id !== file.documentUI.id
  })

  setAttachments(newAttachments)
}

export {tryToUploadFile, cancelFileUpload, removeFileFromTheList}
