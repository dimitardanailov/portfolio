'use client'

import {useState} from 'react'

import IPFSFile from '@/classes/ipfs-file'
import {FileType} from '@/enums'

import NavBar from '@/components/NavBar'
import IPFSContainer from '../components/IPFSContainer'

export default function Page() {
  const [attachments, setAttachments] = useState<IPFSFile[]>([])
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
