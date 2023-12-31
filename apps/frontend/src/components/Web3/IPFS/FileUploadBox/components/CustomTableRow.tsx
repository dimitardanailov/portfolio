import {Dispatch, SetStateAction, useState, FC} from 'react'

import {AppTimeout} from '@/classes'

import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import {StyledTableRowCell} from '@/styled-components/table'

import {CustomTableRowProps} from './props'

import {
  tryToUploadFile,
  cancelFileUpload,
  removeFileFromTheList,
} from './events'

import {
  WrapperButttons,
  UploadButton,
  CancelButton,
  TrashButton,
} from './styled-components'

const byteSize = require('byte-size')

const CustomTableRow: FC<CustomTableRowProps> = ({
  file,
  attachments,
  setAttachments,
  delay,
  fileUploadFile,
}) => {
  const size = byteSize(file.attachment.size)
  const printSize = `${size.value} ${size.unit}`

  const [timeouts, setTimeouts]: [
    AppTimeout[],
    Dispatch<SetStateAction<AppTimeout[]>>,
  ] = useState(AppTimeout.emptyArray())

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
        <WrapperButttons>
          <UploadButton
            disabled={file.isAttachmentIsSkippedToBeUploadedInDatabase()}
            onClick={() =>
              tryToUploadFile(
                file,
                attachments,
                setAttachments,
                delay,
                fileUploadFile,
                setTimeouts,
              )
            }
          >
            Upload
          </UploadButton>
          <CancelButton
            onClick={() => cancelFileUpload(file)}
            disabled={!file.uploadStatusIsActive()}
          >
            Cancel
          </CancelButton>
          <TrashButton
            onClick={() =>
              removeFileFromTheList(file, attachments, setAttachments)
            }
          >
            Remove
          </TrashButton>
        </WrapperButttons>
      </TableCell>
    </TableRow>
  )
}

export default CustomTableRow
