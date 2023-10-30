import {FC} from 'react'

import Link from 'next/link'

import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'

import styled from 'styled-components'

import type {MenuItem} from '@/menu'

const CustomListItemIcon = styled(ListItemIcon)`
  min-width: 36px;
`

interface Props {
  items: MenuItem[]
}

const LeftDrawer: FC<Props> = ({items}) => {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {items.map((item: MenuItem) => (
          <ListItem key={item.key} disablePadding>
            <Link href={item.href} title={item.title}>
              <ListItemButton>
                <CustomListItemIcon>{item.Icon}</CustomListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default LeftDrawer
