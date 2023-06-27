import {Dispatch, SetStateAction} from 'react'

import {IPFSFile} from '@/classes'
import {FileUploadFileType} from '@/components/Web3/IPFS/FileUploadBox/components/request'
import {filterAttachments} from '@/helpers'

import AppWeb3Storage from '@/web3/AppWeb3Storage'

function fileUploadFile<FileUploadFileType>(
  attachments: IPFSFile[],
  file: IPFSFile,
  setAttachments: Dispatch<SetStateAction<IPFSFile[]>>,
) {
  const filteredAttachments = filterAttachments(attachments, file)

  file.setUploadStatusToActive()

  const callback = () => {
    setAttachments([file, ...filteredAttachments])
  }

  const errorCallback = () => {
    alert('something is wrong')
  }

  const appStorage = AppWeb3Storage.makeClient()
  appStorage.uploadFile(file, callback, errorCallback)
}

function fetchRemoteAttachments(callback: Function, errorCallback: Function) {
  const appStorage = AppWeb3Storage.makeClient()
  const promise = appStorage.fetchAttachments()
  promise
    .then(response => {
      callback(response)
    })
    .catch(e => {
      errorCallback()
    })
}

export {fileUploadFile, fetchRemoteAttachments}
