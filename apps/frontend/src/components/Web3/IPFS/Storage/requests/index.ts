import {Dispatch, SetStateAction} from 'react'

import IPFSFile from '@/classes/ipfs-file'

export type DeleteFileFromDatabaseType = (
  filteredAttachments: IPFSFile[],
  activeFile: IPFSFile,
  setAttachments: Dispatch<SetStateAction<IPFSFile[]>>,
) => void

export function styleGuideDeleteFileFromDatabase(
  filteredAttachments: IPFSFile[],
  _: IPFSFile,
  setAttachments: Dispatch<SetStateAction<IPFSFile[]>>,
) {
  setAttachments(filteredAttachments)
}

export type DownloadFileByType = (file: IPFSFile) => void

export function styleGuideDowloadFile(_: IPFSFile) {
  alert('styleGuideDowloadFile')
}
