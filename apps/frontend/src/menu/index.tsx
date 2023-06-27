import WalletIcon from '@mui/icons-material/Wallet'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import FileCopyIcon from '@mui/icons-material/FileCopy'

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
  href: '/ipfs/empty',
  Icon: <FileCopyIcon />,
}

export const menuItems: MenuItem[] = [Metamask, IPFSEmpty, IPFSDummy]
