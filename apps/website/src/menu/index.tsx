import WalletIcon from '@mui/icons-material/Wallet'
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'

export type MenuItem = {
  key: string
  text: string
  href: string
  title: string
  Icon: JSX.Element
}

export const Home: MenuItem = {
  key: 'home',
  text: '<ddanailov />',
  href: '/',
  title: 'Dimitar Danailov: Software Development Contractor',
  Icon: <HomeIcon />,
}

export const RecommendationLetters = {
  key: 'recommendation-letters',
  text: '<recommendations />',
  title: '5 rated: Freelancer',
  href: '/recommendation-letters',
  Icon: <WalletIcon />,
}

export const HireMe = {
  key: 'hire-me',
  text: '<hire-me/>',
  title: '13 years of helping build an inclusive web2 or web3 projects',
  href: '/hire-me',
  Icon: <WorkIcon />,
}

export const Certificates = {
  key: 'certificates',
  text: '<certificates />',
  title: 'Certified Engineer by Google, Meta, AWS',
  href: 'certificates',
  Icon: <SchoolIcon />,
}

export const Positions = {
  key: 'positions',
  text: '<positions />',
  title: 'Ex CTO, Staff Engineer, Architect and Engineering manager',
  href: 'positions',
  Icon: <FeaturedPlayListIcon />,
}

export const menuItems: MenuItem[] = [
  Home,
  HireMe,
  RecommendationLetters,
  Certificates,
  Positions,
]
