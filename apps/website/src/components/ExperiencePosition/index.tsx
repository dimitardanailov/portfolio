import {FC} from 'react'

import TargetBlankLink from '@/components/TargetBlankLink'
import PositionLink from '@/components/PositionLink'

import Position from '@/types/Position'

interface Props {
  position: Position
}

const Component: FC<Props> = ({position}) => {
  const {title, teamSize, sufix, externalUrl, company, period} = position

  return (
    <>
      <PositionLink sufix={sufix} position={title} />,{' '}
      <TargetBlankLink text={company} title={title} href={externalUrl} />
      <span>
        : {period} (Team size: {teamSize});
      </span>
    </>
  )
}

export default Component
