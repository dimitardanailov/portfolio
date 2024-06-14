import HomeIcon from '@mui/icons-material/Home'
import SchoolIcon from '@mui/icons-material/School'
import DeblurIcon from '@mui/icons-material/Deblur'
import ArticleIcon from '@mui/icons-material/Article'
import CameraIcon from '@mui/icons-material/Camera'
import HandshakeIcon from '@mui/icons-material/Handshake'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import PagesIcon from '@mui/icons-material/Pages'

export type MenuItem = {
  key: string
  text: string
  href: string
  title: string
  Icon: JSX.Element
}

export const Home: MenuItem = {
  key: 'home',
  text: 'summary',
  href: '/',
  title: 'Dimitar Danailov: Software Development Contractor',
  Icon: <HomeIcon />,
}

export const RecommendationLetters = {
  key: 'recommendation-letters',
  text: 'recommendations',
  title: '5 rated: Freelancer',
  href: '/recommendation-letters',
  Icon: <RecordVoiceOverIcon />,
}

export const HireMe = {
  key: 'hire-me',
  text: 'hire me',
  title: '14 years of helping build an inclusive web2 or web3 projects',
  href: '/hire-me',
  Icon: <HandshakeIcon />,
}

export const Certificates = {
  key: 'certificates',
  text: 'certificates',
  title: 'Certified Engineer by Google, Meta, AWS',
  href: '/certificates',
  Icon: <SchoolIcon />,
}

export const Positions = {
  key: 'positions',
  text: 'positions',
  title: 'Ex CTO, Staff Engineer, Architect and Engineering manager',
  href: '/positions',
  Icon: <DeblurIcon />,
}

export const Articles = {
  key: 'articles',
  text: 'articles',
  title: 'Articles about react, vercel, nextjs, nodejs, aws, blockchain',
  href: '/articles',
  Icon: <PagesIcon />,
}

export const Demos = {
  key: 'demos',
  text: 'demos',
  title: 'React, REST API, React Custom Hooks',
  href: '/demos',
  Icon: <CameraIcon />,
}

export const menuItems: MenuItem[] = [
  Home,
  HireMe,
  RecommendationLetters,
  Certificates,
  Positions,
  Articles,
  Demos,
]
