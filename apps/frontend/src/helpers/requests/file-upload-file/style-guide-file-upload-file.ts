import {Dispatch, SetStateAction} from 'react'

import IPFSFile from '@/classes/ipfs-file'
import filterAttachments from '@/helpers/filter-attachments'

export function styleGuideFileUploadFile(
  attachments: IPFSFile[],
  file: IPFSFile,
  setAttachments: Dispatch<SetStateAction<IPFSFile[]>>,
) {
  const filteredAttachments = filterAttachments(attachments, file)
  file.setUiAttachmentRoleToStoredRole()
  setAttachments([file, ...filteredAttachments])
}

export default styleGuideFileUploadFile
