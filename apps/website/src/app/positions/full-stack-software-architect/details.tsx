import type Position from '@/types/Position'

import {sufix} from './db'

const position = 'Full Stack Software Architect'
const teamSize = '100+'

const mentorMate: Position = {
  title: position,
  teamSize,
  sufix,
  externalUrl: 'https://mentormate.com/',
  company: 'Mentormate',
  period: '2015 - 2017',
}

export {position, teamSize}

export default mentorMate
