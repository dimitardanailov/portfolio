import type {Position, ResumePosition} from '@/types'

const sufix = 'blockchain-staff-engineer-propine'
const role = 'BlockChain Staff Engineer'
const teamSize = '20+'
const period = ' Sep 2021 - Aug 2022'
const companyName = 'Propine.com'
const externalUrl = 'https://propine.com'

const technologies = [
  'Custody wallet',
  'AWS',
  'Typescript',
  'Nodejs',
  'Hapijs',
  'RabbitMQ',
  'Jest',
  'ElasticSearch and OpenSearch',
  'Docker',
  'Terraform',
  'PostgreSQL',
  'Algorand',
  'Cosmos',
  'etherjs',
  'Polygon',
  'Binance Smart Chain',
  'Metamask',
]

const position: Position = {
  title: role,
  teamSize,
  sufix,
  externalUrl,
  company: companyName,
  period,
}

const resumePosition: ResumePosition = {
  title: position.title,
  period,
  technologies,
  summaryItems: [],
}

export {position, resumePosition, sufix, technologies}
