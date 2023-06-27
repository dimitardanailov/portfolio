'use client'

import {useState} from 'react'

import NavBar from '@/components/NavBar'
import {FileType, UIAttachmentRole} from '@/enums'
import {IPFSFile} from '@/classes'

import IPFSContainer from '../components/IPFSContainer'

import {generateDummyAttachments} from '@/dummy/attachments'

export default function Page() {
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
    <>
      <div>
        <NavBar />
      </div>
      <section>
        <IPFSContainer
          allowedFiles={allowedFiles}
          attachments={attachments}
          setAttachments={setAttachments}
        />
      </section>
    </>
  )
}