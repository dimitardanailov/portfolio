import {useState} from 'react'

import IPFSFile from '@/classes/ipfs-file'
import {FileType} from '@/enums'

import IPFSContainer from '../components/IPFSContainer'

const Content = () => {
  const [attachments, setAttachments] = useState<IPFSFile[]>([])
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
