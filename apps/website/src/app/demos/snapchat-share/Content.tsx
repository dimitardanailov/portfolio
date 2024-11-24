'use client'

import React, {FC} from 'react'
import useSnapKit from './hooks/useSnapKit'

const Component: FC = () => {
  useSnapKit()

  return (
    <div>
      <button
        className="snapchat-custom-share-button"
        data-share-url="https://zaynvipkey.fan3.io/share"
      >
        Share on Snapchat
      </button>
    </div>
  )
}

export default Component
