import IPFSFile from '@/classes/ipfs-file'

function filterAttachments(attachments: IPFSFile[], file: IPFSFile) {
  const filteredAttachments = attachments.filter((attachment: IPFSFile) => {
    return (
      attachment.documentUI.id !== file.documentUI.id &&
      attachment.isAttachmentValidToBeRender()
    )
  })

  return filteredAttachments
}

export default filterAttachments
