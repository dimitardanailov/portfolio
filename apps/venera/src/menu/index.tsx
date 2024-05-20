import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'

export type MenuItem = {
  key: string
  text: string
  href: string
  title: string
  Icon: JSX.Element
}

export const Home: MenuItem = {
  key: 'home',
  text: '<sr />',
  href: '/',
  title: 'Venera Sokolova:',
  Icon: <HomeIcon />,
}

export const HireMe = {
  key: 'hire-me',
  text: '<hire-me/>',
  title: '',
  href: '/hire-me',
  Icon: <WorkIcon />,
}

export const menuItems: MenuItem[] = [Home, HireMe]
