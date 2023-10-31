import {Metadata} from 'next'

const title = 'Software Development Contractor'
const description =
  'My skills are: React, Nodejs, Typescript, Blockchain, Nextjs, Full Stack Development and Staff Management'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://ddanailov.dev',
  },
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: 'https://ddanailov.dev',
  },
}

const layout = ({children}: {children: React.ReactNode}) => {
  return <>{children}</>
}

export default layout
