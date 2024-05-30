'use client'

import {Dispatch, FC, SetStateAction} from 'react'

import styled from 'styled-components'

import BasicButton from '@/styled-components/Buttons/BasicButton'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'

import getPrices from '../utils/getPrices'
import {getCoingeckoRequestParams} from '../db'

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  flex-direction: center;
  justify-content: space-end;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`

const StyledButton = styled(BasicButton)`
  margin-left: auto;
`

export interface Props {
  setPrices: Dispatch<SetStateAction<CoingeckoSimplePriceResponse[]>>
}

const PageHeaderContainer: FC<Props> = ({setPrices}) => {
  const onClickHandler = () => {
    getPrices(getCoingeckoRequestParams()).then(prices => {
      setPrices(prices)
    })
  }

  return (
    <Wrapper>
      <StyledButton
        type="button"
        fontSize="1.2rem"
        padding="1rem 2rem"
        onClick={onClickHandler}
      >
        Refresh
      </StyledButton>
    </Wrapper>
  )
}

export default PageHeaderContainer
