'use client'

import {useEffect, useRef, useState, FC} from 'react'
import mermaid from 'mermaid'

export interface Props {
  text: string
  diagramId: string
}

const MermaidDiagramComponent: FC<Props> = ({text, diagramId}) => {
  const diagramRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [hasRendered, setHasRendered] = useState(false)

  // Initialize Mermaid once on mount
  useEffect(() => {
    mermaid.initialize({startOnLoad: false})
  }, [])

  // Render diagram when text or ID changes
  useEffect(() => {
    let isCancelled = false

    if (diagramRef.current && text) {
      setError(null)

      try {
        mermaid.parse(text)

        mermaid
          .render(diagramId, text)
          .then(({svg, bindFunctions}) => {
            const target = diagramRef.current
            if (target && !isCancelled) {
              target.innerHTML = svg
              bindFunctions?.(target)
              setHasRendered(true)
            }
          })
          .catch(err => {
            console.error('Mermaid render error:', err)
            setError('Failed to render diagram. Check Mermaid syntax.')
          })
      } catch (parseErr: any) {
        console.error('Mermaid parse error:', parseErr)
        setError(
          `Mermaid syntax error: ${parseErr.message || String(parseErr)}`,
        )
      }
    }

    return () => {
      isCancelled = true
    }
  }, [text, diagramId])

  if (error) {
    return (
      <div
        style={{
          color: 'red',
          border: '1px solid red',
          padding: '10px',
          margin: '20px 0',
        }}
      >
        <p>Error displaying diagram:</p>
        <pre style={{whiteSpace: 'pre-wrap'}}>{error}</pre>
        <p>Input text:</p>
        <pre style={{whiteSpace: 'pre-wrap'}}>{text}</pre>
      </div>
    )
  }

  return (
    <div
      className="mermaid-container"
      style={{
        overflow: 'auto',
        border: '1px solid #eee',
        padding: '10px',
        borderRadius: '5px',
        minHeight: '50px',
      }}
    >
      <div ref={diagramRef} id={diagramId} />
    </div>
  )
}

export default MermaidDiagramComponent
