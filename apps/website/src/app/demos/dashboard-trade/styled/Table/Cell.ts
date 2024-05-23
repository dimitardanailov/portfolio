import styled from 'styled-components'

interface Props {
  width: string
  cursor?: string
}

export const Cell = styled.div<Props>`
  position: relative;

  overflow: hidden;
  width: ${props => props.width};
  padding: 0 1rem;
  cursor: ${props => props.cursor || 'default'};
`

export const CoinCell = styled(Cell)`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 120px;
`

export const PriceUSDCell = styled(Cell)`
  min-width: 90px;
`

export default Cell
