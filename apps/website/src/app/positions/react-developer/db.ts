import type {Position, ResumePosition} from '@/types'

const sufix = 'react-developer'

const technologies = [
  'React',
  'Playwright',
  'TypeScript',
  'Sigmajs',
  'D3.js',
  'Automation testing',
]

const externalUrl = 'http://occrp.org'
const companyName = 'The Organized Crime and Corruption Reporting Project'
const period = 'Jul - Oct 2024'

const position: Position = {
  title: 'React Developer',
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
  summaryItems: [`Specialized in ${technologies.join(', ')}`],
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
