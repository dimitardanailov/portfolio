import {Dispatch, SetStateAction} from 'react'
import IPFSFile from '@/classes/ipfs-file'

const tryToUploadFile = (
  file: IPFSFile,
  attachments: IPFSFile[],
  setAttachments: Dispatch<SetStateAction<IPFSFile[]>>,
) => {
  const updatedAttachments = attachments.map((attachment: IPFSFile) => {
    if (attachment.documentUI.id === file.documentUI.id) {
      attachment.setUploadStatusToActive()
    }

    return attachment
  })
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
