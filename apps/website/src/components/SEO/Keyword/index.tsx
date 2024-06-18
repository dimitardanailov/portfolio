import {FC} from 'react'

interface Props {
  word: string
}

const Layout: FC<Props> = ({word}) => {
  return <strong>{word}</strong>
}

export default Layout
