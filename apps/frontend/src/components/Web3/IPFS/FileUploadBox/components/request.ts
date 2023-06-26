import {Dispatch, SetStateAction} from 'react'

import IPFSFile from '@/classes/ipfs-file'
import {filterAttachments} from '@/helpers'

export type FileUploadFileType = (
  attachments: IPFSFile[],
  file: IPFSFile,
  setAttachments: Dispatch<SetStateAction<IPFSFile[]>>,
) => void

export function styleGuideFileUploadFile(
  attachments: IPFSFile[],
  file: IPFSFile,
  setAttachments: Dispatch<SetStateAction<IPFSFile[]>>,
) {
  const filteredAttachments = filterAttachments(attachments, file)
  file.setUiAttachmentRoleToStoredRole()
  setAttachments([file, ...filteredAttachments])
}
