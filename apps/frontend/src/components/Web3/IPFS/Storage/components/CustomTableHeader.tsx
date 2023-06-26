import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import {StyledTableHeaderCell} from '@/styled-components/table'

function CustomTableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell width={'50%'}>
          <StyledTableHeaderCell>Document title</StyledTableHeaderCell>
        </TableCell>
        <TableCell width={'10%'}>
          <StyledTableHeaderCell>Upload on</StyledTableHeaderCell>
        </TableCell>
        <TableCell width={'20%'}>
          <StyledTableHeaderCell>Uploaded by</StyledTableHeaderCell>
        </TableCell>
        <TableCell width={'10%'}>
          <StyledTableHeaderCell>Type</StyledTableHeaderCell>
        </TableCell>
        <TableCell width={'5%'}>
          <StyledTableHeaderCell>Download</StyledTableHeaderCell>
        </TableCell>
        <TableCell width={'5%'}>
          <StyledTableHeaderCell>Delete</StyledTableHeaderCell>
        </TableCell>
      </TableRow>
    </TableHead>
  )
}

export default CustomTableHeader
