import {Dispatch, SetStateAction, useState} from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

import {UIAttachmentRole} from '@/enums'
import IPFSFile from '@/classes/ipfs-file'

import {ExternalStyledWrapper} from '@/styled-components/file-upload'
import {AttachmentStorageProps} from './props'
import EmptyContainer from './components/EmptyContainer'

import {CustomTableHeader, CustomTableRow, InternalDialog} from './components'

export {
  WrapperIcon,
  TableCellAttachmentType,
  TableCellIcon,
  StyledDownloadIcon,
  StyledDeleteForever,
} from './styled-components'

const InternalAttachmentStorage: React.FC<AttachmentStorageProps> = ({
  attachments,
  setAttachments,
  deleteFileFromDatabase,
  delay,
  downloadAttachmentHandler,
}) => {
  const dbAttachments = IPFSFile.filterAttachmentsByUIAttachmentRole(
    attachments,
    UIAttachmentRole.AttachmentStoredRole,
  )

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const [dialogIsOpen, setDialogIsOpen]: [
    boolean,
    Dispatch<SetStateAction<boolean>>,
  ] = useState(false)
  const dummyPMTFile = IPFSFile.createDummyFile()
  const [activePMTFile, setActiveFile]: [
    IPFSFile,
    Dispatch<SetStateAction<IPFSFile>>,
  ] = useState(dummyPMTFile)
  const dialogHandleClose = () => {
    setDialogIsOpen(false)
    setActiveFile(dummyPMTFile)
  }

  const dialogHandleAgree = () => {
    if (activePMTFile.isDatabaseDeleteStatusEqualToActive()) {
      return
    }

    const newAttachments = attachments.map((attachment: IPFSFile) => {
      if (activePMTFile.documentUI.id === attachment.documentUI.id) {
        attachment.setDatabaseDeleteStatusToActive()
      }

      return attachment
    })

    setAttachments(newAttachments)

    setTimeout(() => {
      const filteredAttachments = newAttachments.filter(
        (attachment: IPFSFile) => {
          return activePMTFile.documentUI.id !== attachment.documentUI.id
        },
      )

      deleteFileFromDatabase(filteredAttachments, activePMTFile, setAttachments)
    }, delay)

    setDialogIsOpen(false)
    setActiveFile(dummyPMTFile)
  }

  return (
    <Paper sx={{width: '100%', overflow: 'hidden'}}>
      <TableContainer sx={{maxHeight: 440}}>
        <Table stickyHeader aria-label="sticky table">
          <CustomTableHeader />
          <TableBody>
            {dbAttachments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(function (file: IPFSFile) {
                return (
                  <CustomTableRow
                    key={file.documentUI.id}
                    file={file}
                    setDialogIsOpen={setDialogIsOpen}
                    setActiveFile={setActiveFile}
                    downloadAttachmentHandler={downloadAttachmentHandler}
                  />
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={dbAttachments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <InternalDialog
        dialogIsOpen={dialogIsOpen}
        dialogHandleClose={dialogHandleClose}
        dialogHandleAgree={dialogHandleAgree}
      />
    </Paper>
  )
}

export const ExternalAttachmentStorage: React.FC<AttachmentStorageProps> = ({
  attachments,
  setAttachments,
  deleteFileFromDatabase,
  delay = 0,
  downloadAttachmentHandler,
}) => {
  const attachmentArrayHasStoredAttachments =
    IPFSFile.attachmentsQueueHasStoredRoleAttachments(attachments)

  return (
    <ExternalStyledWrapper>
      {attachmentArrayHasStoredAttachments ? (
        <InternalAttachmentStorage
          attachments={attachments}
          setAttachments={setAttachments}
          deleteFileFromDatabase={deleteFileFromDatabase}
          delay={delay}
          downloadAttachmentHandler={downloadAttachmentHandler}
        />
      ) : (
        <EmptyContainer />
      )}
    </ExternalStyledWrapper>
  )
}

export default ExternalAttachmentStorage
