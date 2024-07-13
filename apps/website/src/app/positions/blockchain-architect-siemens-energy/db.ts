import type {Position, ResumePosition} from '@/types'

const technologies = [
  'HyperLedger Besu',
  'Etherium',
  'etherjs',
  'web3js',
  'Typescript',
  'Nestjs',
  'Jest',
  'Nodejs',
]

const teamSize = '15+'
const companyName = 'Siemens Energy'
const sufix = 'blockchain-architect-siemens-energy'
const externalUrl = 'https://www.siemens-energy.com/global/en/home.html'
const period = '(Mar - Jun 2023)'

const position: Position = {
  title: 'Blockchain Architect',
  teamSize,
  sufix,
  externalUrl,
  company: companyName,
  period: period,
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
