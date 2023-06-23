import {type FC} from 'react'
import styled from 'styled-components'

const dot = `rounded-full h-2 w-2 mx-0.5 bg-current animate-[blink_1s_ease_0s_infinite_normal_both]"`

const StyledComponent = styled.span`
  display: inline-flex;
  text-align: center;
  align-items: center;
  line-height: 1.75rem;
  height: 1.5rem;

  border: 1px solid red;
`

export const Loading: FC = () => {
  return (
    <StyledComponent>
      <span className={dot} key="dot_1'" />
      <span className={dot} style={{animationDelay: '0.2s'}} key="dot_2" />
      <span className={dot} style={{animationDelay: '0.2s'}} key="dot_3" />
    </StyledComponent>
  )
}
