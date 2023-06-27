import {FC, useState} from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

import IPFSFile from '@/classes/ipfs-file'

import {RenderFileUploadCanidatesProps} from './props'
import {Wrapper} from './styled-components'
import {StyledTableHeaderCell} from '@/styled-components/table'
import CustomTableRow from './CustomTableRow'

const InternalRenderFileUploadCanidates: FC<RenderFileUploadCanidatesProps> = ({
  attachments,
  setAttachments,
  type,
  delay,
  fileUploadFile,
}) => {
  const filteredItems = attachments.filter((file: IPFSFile) => {
    const isCorrect = file.isUIAttachmentFileCandidate(type)

    return isCorrect
  })

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{width: '100%', overflow: 'hidden'}}>
      <TableContainer sx={{maxHeight: 340}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                <StyledTableHeaderCell>Name</StyledTableHeaderCell>
              </TableCell>
              <TableCell>
                <StyledTableHeaderCell>Type</StyledTableHeaderCell>
              </TableCell>
              <TableCell>
                <StyledTableHeaderCell>Size</StyledTableHeaderCell>
              </TableCell>
              <TableCell>
                <StyledTableHeaderCell>Progress</StyledTableHeaderCell>
              </TableCell>
              <TableCell>
                <StyledTableHeaderCell>Status</StyledTableHeaderCell>
              </TableCell>
              <TableCell>
                <StyledTableHeaderCell>Action</StyledTableHeaderCell>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredItems
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(function (file: IPFSFile) {
                return (
                  <CustomTableRow
                    key={file.documentUI.id}
                    file={file}
                    attachments={attachments}
                    setAttachments={setAttachments}
                    delay={delay}
                    fileUploadFile={fileUploadFile}
                  />
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredItems.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

const ExternalRenderFileUploadCanidates: FC<RenderFileUploadCanidatesProps> = ({
  attachments,
  setAttachments,
  type,
  delay,
  fileUploadFile,
}) => {
  const attachmentArrayHasCandidateRoleAttachments =
    IPFSFile.attachmentsQueueHasCandidateRoleAttachments(attachments)

  return (
    <Wrapper>
      {attachmentArrayHasCandidateRoleAttachments ? (
        <InternalRenderFileUploadCanidates
          attachments={attachments}
          setAttachments={setAttachments}
          type={type}
          delay={delay}
          fileUploadFile={fileUploadFile}
        />
      ) : (
        ''
      )}
    </Wrapper>
  )
}

export default ExternalRenderFileUploadCanidates
