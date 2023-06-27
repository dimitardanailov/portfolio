import {FC} from 'react'

import styled from 'styled-components'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

const StyledWrapper = styled.div`
  position: relative;

  border: 1px solid #ccc;
`

const TopElement = styled.div`
  position: relative;

  display: block;
  width: 100%;
  height: 16px;
  background-color: #ebebeb;

  border-bottom: 1px solid #ccc;
`

export interface DialogProps {
  dialogIsOpen: boolean
  dialogHandleClose: any
  dialogHandleAgree: any
}

const InternalDialog: FC<DialogProps> = ({
  dialogIsOpen,
  dialogHandleClose,
  dialogHandleAgree,
}) => {
  const uniqId = Math.random()
  const descriptionID = `alert-dialog-description-${uniqId}`

  return (
    <Dialog
      open={dialogIsOpen}
      onClose={dialogHandleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <StyledWrapper>
        <TopElement />
        <DialogContent>
          <DialogContentText id={descriptionID}>
            Permenently delete document?
          </DialogContentText>
        </DialogContent>

        <DialogActions>Under Construction</DialogActions>
      </StyledWrapper>
    </Dialog>
  )
}

export default InternalDialog
