import {useEffect} from 'react'

declare global {
  interface Window {
    snapKitInit: () => void
  }
}

/**
 * Documentation page:
 * https://developers.snap.com/snap-kit/creative-kit/web#customize-the-share-button
 */
const useSnapKit = () => {
  useEffect(() => {
    const loadSnapKit = () => {
      const script = document.createElement('script')
      script.src = 'https://sdk.snapkit.com/js/v1/create.js'
      script.async = true

      script.onload = () => {
        setTimeout(() => {
          console.log('Snap Kit SDK loaded')
        })
      }

      script.onerror = () => {
        console.error('Failed to load Snap Kit SDK')
      }

      document.body.appendChild(script)

      window.snapKitInit = function () {
        // @ts-ignore
        snap.creativekit.initalizeShareButtons(
          document.getElementsByClassName('snapchat-custom-share-button'),
        )
      }
    }

    loadSnapKit()
  }, [])
}

export default useSnapKit
