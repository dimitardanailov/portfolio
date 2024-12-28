import Position from '@/types/Position'

// Contract Positions
import theInternationRedCross from './fullstack-javascript-devops-architect/details'
import {position as collinsonGroup} from './full-stack-engineer-collinson/db'
import {position as siemens} from './blockchain-architect-siemens-energy/db'
import {position as propine} from './blockchain-staff-engineer-propine/db'
import {position as occrp} from './react-developer/db'
import {position as fan3} from './typescript-developer-fan3/db'
import elephantstock from './software-engineering-manager/details'
import getCraft from './software-architect-getcraft/details'

// Onsite employment
import liveAreaPosition from './technical-architect/details'
import mentorMatePosition from './full-stack-software-architect/details'
import wollowSoftCTO from './wollow-soft-cto/details'
import {position as wollowSoftDeveloper} from './wollow-soft-developer-team-leader/db'

const contractPositions = new Map<string, Position>()
contractPositions.set('fan3', fan3)
contractPositions.set('occrp', occrp)
contractPositions.set('collinsonGroup', collinsonGroup)
contractPositions.set('siemens', siemens)
contractPositions.set('theInternationRedCross', theInternationRedCross)
contractPositions.set('propine', propine)
contractPositions.set('elephantstock', elephantstock)
contractPositions.set('getCraft', getCraft)

export {
  contractPositions,
  liveAreaPosition,
  mentorMatePosition,
  wollowSoftCTO,
  wollowSoftDeveloper,
}
