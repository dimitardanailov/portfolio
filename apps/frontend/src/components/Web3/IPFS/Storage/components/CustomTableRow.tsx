import {Dispatch, SetStateAction, FC} from 'react'

import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import {IPFSFile} from '@/classes'
import {DownloadFileByType} from '../requests'
import {StyledTableRowCell} from '@/styled-components/table'
import FileExtensionTypeComponent from './FileExtensionTypeComponent'
import DocumentTitle from './DocumentTitle'
import {
  StyledDeleteForever,
  StyledDownloadIcon,
  TableCellAttachmentType,
  TableCellIcon,
  WrapperIcon,
} from '../styled-components'

interface CustomTableRowProps {
  file: IPFSFile
  setDialogIsOpen: Dispatch<SetStateAction<boolean>>
  setActiveFile: Dispatch<SetStateAction<PMTFile>>
  downloadAttachmentHandler: DownloadFileByType
}

const CustomTableRow: FC<CustomTableRowProps> = ({
  file,
  setDialogIsOpen,
  setActiveFile,
  downloadAttachmentHandler,
}) => {
  const deleteForever = function (file: IPFSFile) {
    setDialogIsOpen(true)
    setActiveFile(file)
  }

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={file.documentUI.id}>
      <TableCell>
        <StyledTableRowCell>
          <FileExtensionTypeComponent
            fileExtensionType={file.documentUI.fileExtensionType}
          />
          <DocumentTitle
            title={file.documentUI.documentTitle}
            downloadUrl={file.documentUI.downloadUrl}
          />
        </StyledTableRowCell>
      </TableCell>
      <TableCell>
        <StyledTableRowCell>{file.documentUI.uploadOn}</StyledTableRowCell>
      </TableCell>
      <TableCell>
        <StyledTableRowCell>{file.documentUI.uploadedBy}</StyledTableRowCell>
      </TableCell>
      <TableCell>
        <TableCellAttachmentType>{file.attachmentType}</TableCellAttachmentType>
      </TableCell>
      <TableCell onClick={() => downloadAttachmentHandler(file)}>
        <TableCellIcon>
          <WrapperIcon
            color="#fff"
            bg_color="#aa1e38"
            margin_top="4px"
            margin_right="4px"
            margin_left="4px"
            border="1px solid #aa1e38"
          >
            <StyledDownloadIcon
              disabled={file.isDatabaseDeleteStatusEqualToActive()}
            />
          </WrapperIcon>
        </TableCellIcon>
      </TableCell>
      <TableCell>
        <TableCellIcon>
          <WrapperIcon
            color="#9c9c9c"
            bg_color="#fff"
            margin_top="6px"
            margin_right="4px"
            margin_left="4px"
            border="1px solid #9c9c9c"
            onClick={() => deleteForever(file)}
          >
            <StyledDeleteForever
              disabled={file.isDatabaseDeleteStatusEqualToActive()}
            />
          </WrapperIcon>
        </TableCellIcon>
      </TableCell>
    </TableRow>
  )
}

export default CustomTableRow
