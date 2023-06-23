/*
import {createConfig, configureChains, WagmiConfig} from 'wagmi'
import {publicProvider} from 'wagmi/providers/public'
import {SessionProvider} from 'next-auth/react'
import {mainnet} from 'wagmi/chains'

const {publicClient, webSocketPublicClient} = configureChains(
  [mainnet],
  [publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})

function Web3Provider({Component, pageProps}) {
  return (
    <WagmiConfig config={config}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </WagmiConfig>
  )
}

export default Web3Provider*/

function Web3Provider() {
  return 'Web3Provider'
}

export default Web3Provider
