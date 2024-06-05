'use client'

import {FC} from 'react'

import Alert from '@mui/material/Alert'

import Sorting from '@/types/coingecko/sorting/Sorting'

import styled from 'styled-components'

const StyledAlert = styled(Alert)`
  position: relative;
  margin: 0.5rem;
`

export interface Props {
  sorting: Sorting
}

const CustomAlert: FC<Props> = ({sorting}) => {
  const SortElement = () => {
    if (sorting.column === null) return null

    return (
      <span>
        Sort by {sorting.column}, order by {sorting.orderBy}.
      </span>
    )
  }

  return (
    <StyledAlert severity="success">
      <span>The list with crypto coins has a new version! </span>
      <SortElement />
    </StyledAlert>
  )
}

export default CustomAlert
