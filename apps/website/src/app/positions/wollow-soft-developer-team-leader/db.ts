import type {Position, ResumePosition} from '@/types'

const sufix = 'wollow-soft-cto'

const technologies = [
  'PHP',
  'JavaScript',
  'MySQL/PostgreSQL',
  'Android',
  'iOS',
  'Ruby on Rails',
  'ASP.NET MVC',
]

const externalUrl = 'https://wollow-soft.com/'
const companyName = 'Wollow Soft'
const period = '2010 - 2014'

const position: Position = {
  title: 'Developer and Team Lead',
  teamSize: '25+',
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
    )}. Engineered a PHP-based MVC framework modeled after Ruby on Rails, and successfully onboarded and mentored new team members;`,
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
