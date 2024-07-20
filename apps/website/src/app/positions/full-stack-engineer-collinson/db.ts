import type {Position, ResumePosition} from '@/types'

const technologies = [
  'Nodejs',
  'GraphQL and Apollo Federation',
  'Datadog and Winston',
  'React',
  'Nextjs',
  'Vercel',
  'Mongodb',
  'kubernetes',
  'docker',
  'jest',
  'cerbos',
  'aws',
]

const role = 'Full Stack Engineer and Tech Lead'
const teamSize = '40+'
const sufix = 'full-stack-engineer-collinson'
const externalUrl = 'https://www.collinsongroup.com/'
const companyName = 'Collinson group'
const period = 'Aug, 2023 - Mar, 2024'

const position: Position = {
  title: role,
  teamSize,
  sufix,
  externalUrl,
  company: companyName,
  period,
}

const remotePosition: ResumePosition = {
  title: position.title,
  period,
  technologies,
  summaryItems: [''],
}

export {
  sufix,
  technologies,
  teamSize,
  companyName,
  remotePosition,
  position,
  externalUrl,
}
