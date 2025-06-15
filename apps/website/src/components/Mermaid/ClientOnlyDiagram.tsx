'use client'

import dynamic from 'next/dynamic'

const MermaidDiagram = dynamic(
  () => import('@/components/Mermaid/MermaidDiagramComponent'),
  {ssr: false},
)

const ClientOnlyDiagram = ({text, id}: {text: string; id: string}) => {
  return <MermaidDiagram text={text} diagramId={id} />
}

export default ClientOnlyDiagram
