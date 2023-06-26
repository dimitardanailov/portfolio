'use client'

import {useState} from 'react'

import IPFSFile from '@/classes/ipfs-file'

import NavBar from '@/components/NavBar'
import {IPFSContainer} from '@/components/Web3/IPFS'

interface AttachmentExampleProps {
  attachments: IPFSFile[]
  setAttachments: any
}

const AttachmentExample: React.FC<AttachmentExampleProps> = ({
  attachments,
  setAttachments,
}) => {
  const maximumFileUploadInMb = 5
  // const token = process.env.WEB3_STORAGE_KEY || ''

  return (
    <IPFSContainer
      maximumFileUploadInMb={maximumFileUploadInMb}
      attachments={attachments}
      setAttachments={setAttachments}
    />
  )
}

function AttachmentListIsEmpty() {
  const [attachments, setAttachments] = useState<IPFSFile[]>([])

  return (
    <AttachmentExample
      attachments={attachments}
      setAttachments={setAttachments}
    />
  )
}

export default function IPFS() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <section>
        <AttachmentListIsEmpty />
      </section>
    </>
  )
}
