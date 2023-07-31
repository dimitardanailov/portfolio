import WalletIcon from '@mui/icons-material/Wallet'

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
  Icon: <WalletIcon />,
}

export const RecommendationLetters = {
  key: 'recommendation-letters',
  text: '<recommendations />',
  title: '5 rated: Freelancer',
  href: '/recommendation-letters',
  Icon: <WalletIcon />,
}

export const menuItems: MenuItem[] = [Home, RecommendationLetters]
