import Position from '@/types/Position'

import theInternationRedCross from './fullstack-javascript-devops-architect/details'
import collinsonGroup from './full-stack-engineer-collinson/details'
import siemens from './blockchain-architect-siemens-energy/details'
import propine from './blockchain-staff-engineer-propine/details'
import elephantstock from './software-engineering-manager/details'
import getCraft from './software-architect-getcraft/details'

const positions = new Map<string, Position>()
positions.set('collinsonGroup', collinsonGroup)
positions.set('siemens', siemens)
positions.set('theInternationRedCross', theInternationRedCross)
positions.set('propine', propine)
positions.set('elephantstock', elephantstock)
positions.set('getCraft', getCraft)

export default positions
