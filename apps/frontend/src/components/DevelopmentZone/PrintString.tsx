import {FC} from 'react'

export interface PrintStringProps {
  variable: string
}

export const PrintString: FC<PrintStringProps> = ({variable}) => {
  return <div>{variable}</div>
}

export default PrintString
