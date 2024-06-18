import type Position from '@/types/Position'

import {sufix, externalUrl, companyName, period} from './db'

const position = 'Developer and Team Leader'
const teamSize = '20+'

const wollowSoftCTO: Position = {
  title: position,
  teamSize,
  sufix,
  externalUrl,
  company: companyName,
  period,
}

export {position, teamSize}

export default wollowSoftCTO
