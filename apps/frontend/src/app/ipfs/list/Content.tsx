import {useEffect, useState} from 'react'

import IPFSFile from '@/classes/ipfs-file'
import {AttachmentType, FileType} from '@/enums'

import IPFSContainer from '../components/IPFSContainer'

import {fetchRemoteAttachments} from '../events'

import {Upload} from 'web3.storage'

interface Iterator {
  next(): Upload
}
interface Iterable {
  [Symbol.iterator](): Iterator
}

const Content = () => {
  const [attachments, setAttachments] = useState<IPFSFile[]>([])
  const allowedFiles = [FileType.PDF, FileType.EXCEL, FileType.WORD]

  useEffect(() => {
    if (attachments.length === 0) {
      const callback = async (items: Iterable) => {
        const remoteItems = []
        for await (const item of items) {
          const attachment = new File([''], item.name)
          const file = new IPFSFile(attachment, AttachmentType.Attachment, 100)
          file.documentUI.id = item.id
          file.documentUI.downloadUrl =
            file.documentUI.downloadUrl = `https://dweb.link/ipfs/${item.cid}`
          file.documentUI.documentTitle = item.name
          file.documentUI.uploadOn = item.created
          file.setUiAttachmentRoleToStoredRole()

          remoteItems.push(file)
        }
        setAttachments(remoteItems)
      }
      const errorCallback = () => {
        alert('error.callback')
      }

      fetchRemoteAttachments(callback, errorCallback)
    }
  }, [attachments, setAttachments])

  return (
    <IPFSContainer
      allowedFiles={allowedFiles}
      attachments={attachments}
      setAttachments={setAttachments}
    />
  )
}

export default Content
