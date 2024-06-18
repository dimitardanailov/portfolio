'use client'

import Position from '@/types/Position'

import ExperiencePosition from '@/components/ExperiencePosition'

import {contractPositions} from '@/app/positions/db'

const Roles = () => {
  const roles = Array.from(contractPositions.values())

  return roles.map((position: Position) => {
    return (
      <li key={position.sufix}>
        <ExperiencePosition position={position} />
      </li>
    )
  })
}

export default Roles
