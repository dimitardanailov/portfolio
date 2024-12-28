import {FC} from 'react'

import {VFlexbox} from '@/styled-components/Grid'
import StrongLabel from '@/styled-components/Text/StrongLabel'
import {ListLabel} from '@/app/positions/shared/components'

export type Responsibility = {
  label: string
  description: string
}

type Props = {
  width: number
  responsibilities: Responsibility[]
  listStyle: string
}

const Responsibilities: FC<Props> = ({responsibilities, width, listStyle}) => {
  return (
    <VFlexbox className="my-3">
      <StrongLabel width={width}>Responsibilities:</StrongLabel>
      <ul className={listStyle}>
        {responsibilities.map((item, index) => (
          <li key={index}>
            <ListLabel phrase={item.label} /> {item.description}
          </li>
        ))}
      </ul>
    </VFlexbox>
  )
}

export default Responsibilities
