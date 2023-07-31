import WalletIcon from '@mui/icons-material/Wallet'

export type MenuItem = {
  key: string
  text: string
  href: string
  Icon: JSX.Element
}

export const Home: MenuItem = {
  key: 'home',
  text: 'About',
  href: '/',
  Icon: <WalletIcon />,
}

export const menuItems: MenuItem[] = [Home]
