import type {Position, ResumePosition} from '@/types'

const sufix = 'typescript-developer-fan3'

const technologies = [
  'Typescript',
  'Nodejs',
  'Firebase',
  'Firebase Cloud Functions',
  'Firestore',
  'React',
  'Nextjs',
  'Tailwindcss',
  'Jest',
  'Vercel',
  'Github Actions',
  'Google Cloud Platform',
  'NFT',
  'Web3',
  'Thirdweb',
]

const externalUrl = 'https://fan3.io'
const companyName = 'Fan3'
const period = '2024 - Present'

const position: Position = {
  title: 'Typescript Full Stack Developer',
  teamSize: '3',
  sufix,
  externalUrl,
  company: companyName,
  period,
}

const resumePosition: ResumePosition = {
  title: position.title,
  period: position.period,
  technologies: technologies,
  summaryItems: [
    `Specialized in ${technologies.join(
      ', ',
    )}. Engineered a Typescript-based NFT marketplace, and successfully onboarded and mentored new team members;`,
  ],
}

export {
  sufix,
  technologies,
  externalUrl,
  companyName,
  period,
  position,
  resumePosition,
}
