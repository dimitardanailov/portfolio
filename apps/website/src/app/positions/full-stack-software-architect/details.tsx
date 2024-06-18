import type Position from '@/types/Position'

import {sufix, externalUrl, companyName, period} from './db'

const position = 'Full Stack Software Architect'
const teamSize = '100+'

const mentorMate: Position = {
  title: position,
  teamSize,
  sufix,
  externalUrl,
  company: companyName,
  period,
}

export {position, teamSize}

export default mentorMate
