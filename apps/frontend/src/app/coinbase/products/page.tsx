'use client'

import type {NextPage} from 'next'

import Layout from '@/components/MainLayout'
import LeftDrawer from '@/components/Drawers/LeftDrawer'
import {menuItems} from '@/menu'

import {drawerWidth} from '@/config/layout'

import Content from './Content'

const Title = () => {
  return 'Coinbase - Products'
}

const Page: NextPage = () => {
  return (
    <Layout
      PageContent={Content}
      HeaderTitle={Title}
      drawerWidth={drawerWidth}
      LeftDrawer={<LeftDrawer items={menuItems} />}
    />
  )
}

export default Page
