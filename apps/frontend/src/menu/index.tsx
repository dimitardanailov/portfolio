import WalletIcon from '@mui/icons-material/Wallet'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import ListIcon from '@mui/icons-material/List'

export type MenuItem = {
  key: string
  text: string
  href: string
  Icon: JSX.Element
}

export const Metamask: MenuItem = {
  key: 'metamask',
  text: 'Metamask',
  href: '/',
  Icon: <WalletIcon />,
}

export const IPFSEmpty: MenuItem = {
  key: 'ipfs-empty-container',
  text: 'IPFS-empty',
  href: '/ipfs/empty',
  Icon: <InsertDriveFileIcon />,
}

export const IPFSDummy: MenuItem = {
  key: 'ipfs-dummy-container',
  text: 'IPFS-dummy',
  href: '/ipfs/dummy',
  Icon: <FileCopyIcon />,
}

export const IPFSList: MenuItem = {
  key: 'ipfs-list',
  text: 'IPFS-list',
  href: '/ipfs/list',
  Icon: <ListIcon />,
}

export const CoinbaseProducts: MenuItem = {
  key: 'coinbase-orders-book',
  text: 'Products',
  href: '/coinbase/products',
  Icon: <ListIcon />,
}

export const CoinbaseOrderBooks: MenuItem = {
  key: 'coinbase-orders-book',
  text: 'Orders books',
  href: '/coinbase/orders/book',
  Icon: <ListIcon />,
}

export const menuItems: MenuItem[] = [
  Metamask,
  IPFSEmpty,
  IPFSDummy,
  IPFSList,

  // Coinbase
  CoinbaseProducts,
  CoinbaseOrderBooks,
]
