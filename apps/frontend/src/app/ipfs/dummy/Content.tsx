import {useState} from 'react'

import {FileType, UIAttachmentRole} from '@/enums'
import {IPFSFile} from '@/classes'

import IPFSContainer from '../components/IPFSContainer'

import {generateDummyAttachments} from '@/dummy/attachments'

function Content() {
  const dummyQueueAttachments = generateDummyAttachments(
    UIAttachmentRole.AttachmentCandidateRole,
  )

  const dummyStoredAttachments = generateDummyAttachments(
    UIAttachmentRole.AttachmentStoredRole,
  )

  const dummyAttachments = dummyQueueAttachments.concat(dummyStoredAttachments)
  const [attachments, setAttachments] = useState<IPFSFile[]>(dummyAttachments)
  const allowedFiles = [FileType.PDF, FileType.EXCEL, FileType.WORD]

  return (
    <IPFSContainer
      allowedFiles={allowedFiles}
      attachments={attachments}
      setAttachments={setAttachments}
    />
  )
}

export default Content
