import Position from '@/types/Position'

import theInternationRedCross from './fullstack-javascript-devops-architect/details'
import collinsonGroup from './full-stack-engineer-collinson/details'
import siemens from './blockchain-architect-siemens-energy/details'

const positions = new Map<string, Position>()
positions.set('collinsonGroup', collinsonGroup)
positions.set('siemens', siemens)
positions.set('theInternationRedCross', theInternationRedCross)

export default positions
