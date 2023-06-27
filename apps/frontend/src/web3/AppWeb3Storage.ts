/**
 * source:
 * https://web3.storage/docs/how-tos/store/
 * https://web3.storage/docs/how-tos/list/
 */

import {Web3Storage, Upload} from 'web3.storage'
import {IPFSFile} from '@/classes'

class AppWeb3Storage {
  private _web3Storage: Web3Storage

  constructor(_web3Storage: Web3Storage) {
    this._web3Storage = _web3Storage
  }

  get web3Storage() {
    return this._web3Storage
  }

  uploadFile(file: IPFSFile, callback: Function, errorCallback: Function) {
    const files = [file.attachment]
    this._web3Storage
      .put(files)
      .catch(error => {
        console.error('AppWeb3Storage.uploadFile', error)
        errorCallback()
      })
      .then(cid => {
        file.setUiAttachmentRoleToStoredRole()
        file.documentUI.downloadUrl = `https://dweb.link/ipfs/${cid}`

        callback()
      })
  }

  fetchAttachments(maxResults: number = 20): Promise<unknown> {
    const promise = new Promise((resolve, reject) => {
      try {
        const items = this._web3Storage.list({
          maxResults,
        })

        resolve(items)
      } catch (e) {
        reject(e)
      }
    })

    return promise
  }

  static makeClient() {
    const token = AppWeb3Storage.getAccessToken()
    const _web3Storage = new Web3Storage({token})

    return new AppWeb3Storage(_web3Storage)
  }

  static getAccessToken(): string {
    return process.env.NEXT_PUBLIC_WEB3_KEY || ''
  }
}

export default AppWeb3Storage
