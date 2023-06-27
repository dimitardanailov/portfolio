'use client'

import type {NextPage} from 'next'

import Content from './Content'
import LayoutProvider from '@/providers/LayoutProvider'

import Layout from '@/components/MainLayout'
import LeftDrawer from '@/components/Drawers/LeftDrawer'
import {menuItems} from '@/menu'

import {drawerWidth} from '@/config/layout'

const Title = () => {
  return 'Metamask'
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
