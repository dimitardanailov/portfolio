import {interpret} from 'xstate'

import {UIAttachmentRole, FileType} from '@/enums'

import machine, {states} from './machine'

class IPFSFile {
  /**
   * Docs: https://developer.mozilla.org/en-US/docs/Web/API/File
   */
  attachment: File
  limitFileUploadSize: number

  service

  constructor(attachment: File, limitFileUploadSize: number) {
    this.attachment = attachment
    this.limitFileUploadSize = limitFileUploadSize

    this.service = interpret(machine).start()

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
}

export default IPFSFile
