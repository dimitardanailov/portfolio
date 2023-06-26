'use client'

import {useState} from 'react'

import IPFSFile from '@/classes/ipfs-file'

import NavBar from '@/components/NavBar'

import {AttachmentType, FileType} from '@/enums'
import {StateProps} from '@/props/attachments/ipfs'
import {
  ExternalStyledWrapper,
  InnerStyledWrapper,
} from '@/styled-components/file-upload'
import IPFSFileUploadBox from '@/components/Web3/IPFS/FileUploadBox'
import ExternalAttachmentStorage from '@/components/Web3/IPFS/Storage'

import {
  styleGuideDowloadFile,
  styleGuideDeleteFileFromDatabase,
} from '@/components/Web3/IPFS/Storage/requests'

import {fileUploadFile} from './events'

interface AttachmentExampleProps extends StateProps {
  allowedFiles: FileType[]
}

const AttachmentExample: React.FC<AttachmentExampleProps> = ({
  allowedFiles,
  attachments,
  setAttachments,
}) => {
  const maximumFileUploadInMb = 5
  // const token = process.env.WEB3_STORAGE_KEY || ''

  return (
    <>
      <ExternalAttachmentStorage
        attachments={attachments}
        setAttachments={setAttachments}
        delay={0}
        deleteFileFromDatabase={styleGuideDeleteFileFromDatabase}
        downloadAttachmentHandler={styleGuideDowloadFile}
      />
      <ExternalStyledWrapper>
        <InnerStyledWrapper bgcolor="#fff" border="#f2f2f2">
          <IPFSFileUploadBox
            allowedFiles={allowedFiles}
            maximumFileUploadInMb={maximumFileUploadInMb}
            attachments={attachments}
            setAttachments={setAttachments}
            type={AttachmentType.Attachment}
            id={'ipfs-demo-01'}
            delay={200}
            fileUploadFile={fileUploadFile}
          />
          <IPFSFileUploadBox
            allowedFiles={allowedFiles}
            maximumFileUploadInMb={maximumFileUploadInMb}
            attachments={attachments}
            setAttachments={setAttachments}
            type={AttachmentType.Annex}
            id={'ipfs-demo-02'}
            fileUploadFile={fileUploadFile}
            delay={200}
          />
        </InnerStyledWrapper>
      </ExternalStyledWrapper>
    </>
  )
}

function AttachmentListIsEmpty() {
  const [attachments, setAttachments] = useState<IPFSFile[]>([])
  const allowedFiles = [FileType.PDF, FileType.EXCEL, FileType.WORD]

  return (
    <AttachmentExample
      allowedFiles={allowedFiles}
      attachments={attachments}
      setAttachments={setAttachments}
    />
  )
}

export default function IPFS() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <section>
        <AttachmentListIsEmpty />
      </section>
    </>
  )
}
