import Position from '@/types/Position'

// Contract Positions
import theInternationRedCross from './fullstack-javascript-devops-architect/details'
import collinsonGroup from './full-stack-engineer-collinson/details'
import siemens from './blockchain-architect-siemens-energy/details'
import propine from './blockchain-staff-engineer-propine/details'
import elephantstock from './software-engineering-manager/details'
import getCraft from './software-architect-getcraft/details'

// Onsite employment
import liveAreaPosition from './technical-architect/details'
import mentorMatePosition from './full-stack-software-architect/details'
import wollowSoftCTO from './wollow-soft-cto/details'

const contractPositions = new Map<string, Position>()
contractPositions.set('collinsonGroup', collinsonGroup)
contractPositions.set('siemens', siemens)
contractPositions.set('theInternationRedCross', theInternationRedCross)
contractPositions.set('propine', propine)
contractPositions.set('elephantstock', elephantstock)
contractPositions.set('getCraft', getCraft)

export {contractPositions, liveAreaPosition, mentorMatePosition, wollowSoftCTO}
