'use client'

import Label from '@/components/SimpleLabel'

import Before from './snippets/Before'
import After from './snippets/After'
import ShortVersion from './snippets/ShortVersion'

import {Divider} from '@mui/material'

const Body = () => {
  const listStyle = 'list-disc mx-6 mt-0 mb-5'

  return (
    <>
      <p className="mt-2">
        <span className="font-bold text-lg">
          Exploring React 19: Enhanced Actions:
        </span>
      </p>
      <p>
        One of the new features in React 19 is the improved handling of actions
        for data mutations and state updates. When a user action, like form
        submission, requires an API call, you typically update the state based
        on the response. Previously, this involved manually managing multiple
        states such as pending states, errors, and optimistic updates.
      </p>
      <p className="mt-2">Before Actions:</p>
      <Before />
      <p className="mt-2">
        In React 19, support is added for using async functions in transitions
        to handle pending states, errors, forms, and optimistic updates
        automatically.
      </p>
      <After />
      <p>
        The async transition will immediately set the{' '}
        <span className="font-bold">isPending</span> state to true, make the
        async request(s), and switch{' '}
        <span className="font-bold">isPending</span> to false after any
        transitions. This ensures that the UI remains responsive and interactive
        while data is being processed.
      </p>
      <Divider className="mt-2 mb-2" />
      <p className="mt-2 text-lg font-bold">
        By convention, functions that use async transitions are called
        “Actions”.
      </p>
      <span>Actions handle data submission for you:</span>
      <ul className={listStyle}>
        <li>
          <Label text="Pending state" /> Automatically provides a pending state
          from the beginning to the end of a request.
        </li>
        <li>
          <Label text="Optimistic updates" /> Supports the useOptimistic hook
          for immediate user feedback during submissions.
        </li>
        <li>
          <Label text="Error handling" /> Displays Error Boundaries when a
          request fails and reverts optimistic updates if necessary.
        </li>
        <li>
          <Label text="Forms" /> form elements now support the action and
          formAction props for automatic form handling and reset after
          submission.
        </li>
      </ul>
      <p className="mt-2">
        React 19 introduces useOptimistic for managing optimistic updates and
        the new React.useActionState hook for common action cases. The form
        Actions in react-dom manage forms automatically and useFormStatus
        supports common form-related actions.
      </p>
      <span className="mt-2">Simplified example in React 19:</span>
      <ShortVersion />
    </>
  )
}

export default Body
