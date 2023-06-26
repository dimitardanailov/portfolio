import {FC} from 'react'
import styled from 'styled-components'

const Title = styled.span`
  position: relative;

  color: #aa1e38;
  cursor: pointer;
`

interface DocumentTitleProps {
  title: string
  downloadUrl: string
}

const DocumentTitle: FC<DocumentTitleProps> = ({title, downloadUrl}) => {
  const onTouchHandler = () => {
    window.open(downloadUrl, '_blank')
  }

  return <Title onClick={onTouchHandler}>{title}</Title>
}

export default DocumentTitle
