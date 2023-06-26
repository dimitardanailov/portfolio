import {Dispatch, SetStateAction} from 'react'

import {IPFSFile} from '@/classes'
import {FileUploadFileType} from '@/components/Web3/IPFS/FileUploadBox/components/request'
import {filterAttachments} from '@/helpers'

function fileUploadFile<FileUploadFileType>(
  attachments: IPFSFile[],
  file: IPFSFile,
  setAttachments: Dispatch<SetStateAction<IPFSFile[]>>,
) {
  const filteredAttachments = filterAttachments(attachments, file)
  file.setUiAttachmentRoleToStoredRole()
  setAttachments([file, ...filteredAttachments])
}

export {fileUploadFile}
