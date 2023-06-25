import {useState, FC} from 'react'
import {Web3Storage} from 'web3.storage'

export interface UploadProps {
  token: string
}

export const Upload: FC<UploadProps> = ({token}) => {
  return <div>{token}</div>
}

export default Upload
