'use client'

import type {NextPage} from 'next'

import Component from './Component'

import Layout from '@/components/MainLayout'
import LeftDrawer from '@/components/Drawers/LeftDrawer'
import {menuItems} from '@/menu'

import {drawerWidth} from '@/config/layout'
import {LayoutProvider} from '@/providers'

const Title = () => {
  return <h1>Software Development Contractor</h1>
}

const PageContent = () => {
  return (
    <LayoutProvider>
      <Component />
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
