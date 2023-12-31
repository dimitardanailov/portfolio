import {interpret} from 'xstate'

import {UIAttachmentRole, FileType, AttachmentType} from '@/enums'

import machine, {states} from './machine'
import DocumentUI from '@/models/ui/ipfs/DocumentUI'

class IPFSFile {
  /**
   * Docs: https://developer.mozilla.org/en-US/docs/Web/API/File
   */
  attachment: File
  attachmentType: AttachmentType
  limitFileUploadSize: number
  documentUI: DocumentUI

  service

  constructor(
    attachment: File,
    attachmentType: AttachmentType,
    limitFileUploadSize: number,
    documentUI?: DocumentUI,
  ) {
    this.attachment = attachment
    this.attachmentType = attachmentType
    this.limitFileUploadSize = limitFileUploadSize

    this.service = interpret(machine).start()

    const id = this.generateRandomDocumentId()

    const uploadedByDefaultValue = 'Custom user'

    this.documentUI = {
      id: documentUI?.id || id,
      documentTitle: documentUI?.documentTitle || this.attachment.name,
      uploadOn: documentUI?.uploadOn || '',
      uploadedBy: documentUI?.uploadedBy || uploadedByDefaultValue,
      uploadedByFullName:
        documentUI?.uploadedByFullName || uploadedByDefaultValue,
      attachmentType: documentUI?.attachmentType || AttachmentType.Attachment,
      fileExtensionType: documentUI?.fileExtensionType || FileType.PDF,
      downloadUrl: documentUI?.downloadUrl || '',
    }

    if (this.attachment.size > this.limitFileUploadSize) {
      this.service.send(states.candidateRole.SKIP_FILE_UPLOAD_TO_DATABASE.event)
    }
  }

  getUIAttachmentRole(): UIAttachmentRole {
    return this.service.getSnapshot().context.uiRole
  }

  getServiceActiveState() {
    return this.service.getSnapshot().value
  }

  setUiAttachmentRoleToStoredRole() {
    this.service.send(states.storedRole.IDLE_STORED_ROLE.event)
  }

  setAttachmentToBeRemovedFromUI() {
    this.service.send(states.candidateRole.DELETE_FILE_FROM_UI_IS_ACTIVE.event)
  }

  setUploadStatusToActive() {
    this.service.send(states.candidateRole.UPLOAD_FILE_TO_DATABASE.event)
  }

  setDatabaseDeleteStatusToActive() {
    this.service.send(states.storedRole.DELETE_FILE_TO_DATABASE_IS_ACTIVE.event)
  }

  generateRandomDocumentId(): string {
    const id =
      Math.random() + this.attachment.lastModified + this.attachment.size

    return id.toString()
  }

  printAttachmentData(): string {
    return this.attachmentType === AttachmentType.Attachment
      ? 'Attachment'
      : 'Other Annex'
  }

  uploadStatusIsActive(): boolean {
    return (
      this.getServiceActiveState() ===
      states.candidateRole.UPLOAD_FILE_TO_DATABASE.value
    )
  }

  isAttachmentIsSkippedToBeUploadedInDatabase(): boolean {
    const uiRole = this.getUIAttachmentRole()
    if (uiRole === UIAttachmentRole.AttachmentStoredRole) return true

    const activeState = this.getServiceActiveState()
    switch (activeState) {
      case states.candidateRole.UPLOAD_FILE_TO_DATABASE.value:
      case states.candidateRole.DELETE_FILE_FROM_UI_IS_ACTIVE.value:
      case states.candidateRole.SKIP_FILE_UPLOAD_TO_DATABASE.value:
        return true
      default:
        return false
    }
  }

  /*** is: start */
  isAttachmentValidToBeRender(): boolean {
    return (
      this.uiAttachmentRoleIsStoredRole() ||
      this.getServiceActiveState() !==
        states.candidateRole.DELETE_FILE_FROM_UI_IS_ACTIVE.value
    )
  }

  isUIAttachmentFileCandidate(type: AttachmentType): boolean {
    return (
      this.uiAttachmentRoleIsCandidateRole() && this.attachmentType === type
    )
  }

  isDatabaseDeleteStatusEqualToActive(): boolean {
    return (
      this.getServiceActiveState() ===
      states.storedRole.DELETE_FILE_TO_DATABASE_IS_ACTIVE.value
    )
  }
  /*** is: end */

  uiAttachmentRoleIsCandidateRole(): boolean {
    const role: UIAttachmentRole = this.getUIAttachmentRole()
    return role === UIAttachmentRole.AttachmentCandidateRole
  }

  uiAttachmentRoleIsStoredRole(): boolean {
    const role: UIAttachmentRole = this.getUIAttachmentRole()
    return role === UIAttachmentRole.AttachmentStoredRole
  }

  resetUploadStatus() {
    this.service.send(states.candidateRole.IDLE_CANDIDATE_ROLE.event)
  }

  /*** static: end */
  static attachmentsQueueHasCandidateRoleAttachments(
    attachments: IPFSFile[],
  ): boolean {
    const filesByRole = IPFSFile.filterAttachmentsByUIAttachmentRole(
      attachments,
      UIAttachmentRole.AttachmentCandidateRole,
    )

    return filesByRole.length > 0
  }

  static filterAttachmentsByUIAttachmentRole(
    attachments: IPFSFile[],
    uiAttachmentRole: UIAttachmentRole,
  ): IPFSFile[] {
    const filesByRole = attachments.filter((attachment: IPFSFile) => {
      const role = attachment.getUIAttachmentRole()

      return role === uiAttachmentRole
    })

    return filesByRole
  }

  static attachmentsQueueHasStoredRoleAttachments(
    attachments: IPFSFile[],
  ): boolean {
    const filesByRole = IPFSFile.filterAttachmentsByUIAttachmentRole(
      attachments,
      UIAttachmentRole.AttachmentStoredRole,
    )

    return filesByRole.length > 0
  }

  static createDummyFile(): IPFSFile {
    const file: File = new File(['dummy'], 'dummy', {
      type: 'text/plain',
    })
    const limitFileUploadSize = 1024 * 1024
    const attachment = new IPFSFile(
      file,
      AttachmentType.Attachment,
      limitFileUploadSize,
    )

    return attachment
  }
  /*** static: end */
}

export default IPFSFile
