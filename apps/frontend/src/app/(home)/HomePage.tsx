'use client'

import type {NextPage} from 'next'

import styled from 'styled-components'

import {useEffect} from 'react'
import NavBar from '@/components/NavBar'
import Wallet from '@/components/Web3/Metamask/Wallet'

import {useListen} from '@/hooks/useListen'
import {useMetamask} from '@/hooks/useMetamask'

const WalletBox = styled.div`
  position: relative;
  display: flex;

  background-color: #ccc;
  padding: 2 rem;
`

const HomePage: NextPage = () => {
  const {dispatch} = useMetamask()
  const listen = useListen()

  useEffect(() => {
    if (typeof window !== undefined) {
      // start by checking if window.ethereum is present, indicating a wallet extension
      const ethereumProviderInjected = typeof window.ethereum !== 'undefined'
      // this could be other wallets so we can verify if we are dealing with metamask
      // using the boolean constructor to be explecit and not let this be used as a falsy value (optional)
      const isMetamaskInstalled =
        ethereumProviderInjected && Boolean(window.ethereum.isMetaMask)

      const local = window.localStorage.getItem('metamaskState')

      // user was previously connected, start listening to MM
      if (local) {
        listen()
      }

      // local could be null if not present in LocalStorage
      const {wallet, balance} = local
        ? JSON.parse(local)
        : // backup if local storage is empty
          {wallet: null, balance: null}

      dispatch({type: 'pageLoaded', isMetamaskInstalled, wallet, balance})
    }
  }, [])

  return (
    <>
      <div>
        <NavBar />
      </div>
      <WalletBox>
        <Wallet />
      </WalletBox>
    </>
  )
}

export default HomePage
