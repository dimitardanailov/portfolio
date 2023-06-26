import IPFSFile from '@/classes/ipfs-file'

function filterAttachments(attachments: IPFSFile[], pmtFile: IPFSFile) {
  const filteredAttachments = attachments.filter((attachment: IPFSFile) => {
    return (
      attachment.documentUI.id !== pmtFile.documentUI.id &&
      attachment.isAttachmentValidToBeRender()
    )
  })

  return filteredAttachments
}

export default filterAttachments
