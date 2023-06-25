'use client'

import NavBar from '@/components/NavBar'
import Upload from '@/components/Web3/Storage/Upload'

export default function IPFS() {
  const token = process.env.WEB3_STORAGE_KEY || ''

  return (
    <>
      <div>
        <NavBar />
      </div>
      {token.length > 0 && <Upload token={token} />}
    </>
  )
}
