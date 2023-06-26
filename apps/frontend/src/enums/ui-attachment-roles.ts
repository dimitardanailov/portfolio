enum UIAttachmentRole {
  /**
   * AttachmentCandidateRole marks if the file is selected by the end user, but
   * is not uploaded in the database
   */
  AttachmentCandidateRole = 'AttachmentCandidateRole',
  /**
   * AttachmentStoredRole marks if the file it's uploaded in database
   */
  AttachmentStoredRole = 'AttachmentStoredRole',
}

export default UIAttachmentRole
