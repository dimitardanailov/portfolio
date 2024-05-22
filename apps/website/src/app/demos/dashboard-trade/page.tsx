'use client'

import type {NextPage} from 'next'

import Content from './Content'

import Layout from '@/components/MainLayout'
import LeftDrawer from '@/components/Drawers/LeftDrawer'
import {menuItems} from '@/menu'

import {drawerWidth} from '@/config/layout'
import {LayoutProvider} from '@/providers'

const Title = () => {
  return <h1>Crypto trading portfolio</h1>
}

const PageContent = () => {
  return (
    <LayoutProvider>
      <Content />
    </LayoutProvider>
  )
}

const Page: NextPage = () => {
  return (
    <Layout
      PageContent={PageContent}
      HeaderTitle={Title}
      drawerWidth={drawerWidth}
      LeftDrawer={<LeftDrawer items={menuItems} />}
    />
  )
}

export default Page
