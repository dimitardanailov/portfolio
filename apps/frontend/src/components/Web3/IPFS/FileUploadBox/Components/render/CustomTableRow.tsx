import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import {StyledTableRowCell} from '@/styled-components/table'

import Button from '@mui/material/Button'

import {CustomTableRowProps} from './props'
import {WrapperButttons} from './styled-components'

const byteSize = require('byte-size')

const CustomTableRow: React.FC<CustomTableRowProps> = ({
  file,
  attachments,
  setAttachments,
  // stateDocumentsAttachmentMachine,
  // sendDocumentsAttachmentMachine,
  // delay,
  // fileUploadFile,
}) => {
  const size = byteSize(file.attachment.size)
  const printSize = `${size.value} ${size.unit}`

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={file.documentUI.id}>
      <TableCell width={'52.5%'}>
        <StyledTableRowCell>
          <div>{file.attachment.name}</div>
        </StyledTableRowCell>
      </TableCell>
      <TableCell width={'12.5%'}>
        <StyledTableRowCell>{file.printAttachmentData()}</StyledTableRowCell>
      </TableCell>
      <TableCell width={'5%'}>
        <StyledTableRowCell>{printSize}</StyledTableRowCell>
      </TableCell>
      <TableCell width={'5%'}>
        <StyledTableRowCell>
          {file.attachment.size > file.limitFileUploadSize
            ? 'File exceeds maximum document size!'
            : ''}
        </StyledTableRowCell>
      </TableCell>
      <TableCell width={'5%'}>
        <StyledTableRowCell>{}</StyledTableRowCell>
      </TableCell>
      <TableCell width={'20%'}>
        <WrapperButttons>Buttons</WrapperButttons>
      </TableCell>
    </TableRow>
  )
}

export default CustomTableRow
