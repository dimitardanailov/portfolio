import styled from 'styled-components'

import DownloadIcon from '@mui/icons-material/Download'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import {StyledTableRowCell} from '@/styled-components/table'

const TableCellAttachmentType = styled(StyledTableRowCell)`
  text-transform: capitalize;
`

const TableCellIcon = styled(StyledTableRowCell)`
  flex-direction: row;
  align-items: center;
  align-content: center;
  width: 100%;
`

interface WrapperIconProps {
  readonly bg_color?: string
  readonly color?: string
  readonly margin_top?: string
  readonly margin_left?: string
  readonly margin_right?: string
  readonly border?: string
}

const WrapperIcon = styled.div<WrapperIconProps>`
  position: relative;

  background-color: ${props => props.bg_color};
  color: ${props => props.color};
  padding: 2px;
  border: ${props => props.border};
  cursor: pointer;

  & svg {
    font-size: 14px;
    margin-top: ${props => props.margin_top};
    margin-right: ${props => props.margin_right};
    margin-left: ${props => props.margin_left};
  }
`

interface IconProps {
  disabled: boolean
}

const StyledDownloadIcon = styled(DownloadIcon)<IconProps>`
  position: relative;

  opacity: ${props => (props.disabled ? '0.4' : '1')};
`

const StyledDeleteForever = styled(DeleteForeverIcon)<IconProps>`
  position: relative;

  opacity: ${props => (props.disabled ? '0.4' : '1')};
`

export {
  WrapperIcon,
  TableCellAttachmentType,
  TableCellIcon,
  StyledDownloadIcon,
  StyledDeleteForever,
}
