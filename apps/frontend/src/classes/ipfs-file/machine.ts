/**
 * Resources:
 * https://xstate.js.org/docs/guides/typescript.html#typestates
 */

import {createMachine, assign} from 'xstate'
import {UIAttachmentRole} from '@/enums'

interface MachineContext {
  uiRole: UIAttachmentRole
}

const changeRole = assign(() => {
  return {
    uiRole: UIAttachmentRole.AttachmentStoredRole,
  }
})

export const states = {
  candidateRole: {
    IDLE_CANDIDATE_ROLE: {
      event: 'IDLE_CANDIDATE_ROLE',
      value: 'idle_candidate_role',
    },
    UPLOAD_FILE_TO_DATABASE: {
      event: 'UPLOAD_FILE_TO_DATABASE',
      value: 'upload_file_to_database',
    },
    SKIP_FILE_UPLOAD_TO_DATABASE: {
      event: 'SKIP_FILE_UPLOAD_TO_DATABASE',
      value: 'skip_file_upload_to_database',
    },
  },
  storedRole: {
    IDLE_STORED_ROLE: {
      event: 'IDLE_STORED_ROLE',
      value: 'idle_stored_role',
    },
  },
}

const machine = createMachine(
  {
    schema: {
      context: {} as MachineContext,
    },
    // tsTypes: {} as import('./machine.typegen').Typegen0,
    id: 'ipfs-file-machine',
    initial: states.candidateRole.IDLE_CANDIDATE_ROLE.value,
    context: {
      uiRole: UIAttachmentRole.AttachmentCandidateRole,
    },
    states: {
      idle_candidate_role: {
        on: {
          UPLOAD_FILE_TO_DATABASE:
            states.candidateRole.UPLOAD_FILE_TO_DATABASE.value,

          SKIP_FILE_UPLOAD_TO_DATABASE:
            states.candidateRole.SKIP_FILE_UPLOAD_TO_DATABASE.value,

          IDLE_STORED_ROLE: states.storedRole.IDLE_STORED_ROLE.value,
        },
      },
      upload_file_to_database: {
        on: {
          IDLE_STORED_ROLE: {
            target: states.storedRole.IDLE_STORED_ROLE.value,
          },
          IDLE_CANDIDATE_ROLE: {
            target: states.candidateRole.IDLE_CANDIDATE_ROLE.value,
          },
        },
      },
      skip_file_upload_to_database: {
        type: 'final',
      },
      idle_stored_role: {
        entry: ['changeRole'],
      },
    },
  },
  {
    actions: {
      // @ts-ignore
      changeRole,
    },
  },
)

export default machine
