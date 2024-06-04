import styled from 'styled-components'
import MobileSortingCellParams from '@/types/coingecko/cells/MobileSortingCellParams'

interface Props {
  width: string
  mobile?: MobileSortingCellParams
  cursor?: string
}

export const Cell = styled.div<Props>`
  position: relative;

  overflow: hidden;
  width: ${props => props.width};
  padding: 0 1rem;
  cursor: ${props => props.cursor || 'default'};

  @media (max-width: 1024px) {
    display: ${props => (props.mobile?.hidden ? 'none' : 'block')};
    width: ${props => (props.mobile?.width ? props.mobile?.width : 0)};
  }
`

export const CoinCell = styled(Cell)`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 120px;

  @media (max-width: 1024px) {
    min-width: 50px;
  }
`

export const PriceUSDCell = styled(Cell)`
  min-width: 90px;
`

export default Cell
