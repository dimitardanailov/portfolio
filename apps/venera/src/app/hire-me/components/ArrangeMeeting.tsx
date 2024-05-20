'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import {listStyle} from './shared'

const Content = () => {
  return (
    <>
      <div className="font-bold">Arrange a meeting:</div>
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            href="https://calendly.com/danailov-consulting/partnership"
            title="Arrange a meeting"
            text="Access to my calendar"
            hoverIsActive={true}
          />
        </li>
      </ul>
    </>
  )
}

export default Content
