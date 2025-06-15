'use client'

import {useEffect, useRef, useState, FC} from 'react'
import mermaid from 'mermaid'

export interface Props {
  text: string
  diagramId: string
}

let initialized = false

export function initMermaid() {
  if (!initialized) {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
    })
    initialized = true
  }
}

const MermaidDiagramComponent: FC<Props> = ({text, diagramId}) => {
  const diagramRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [hasRendered, setHasRendered] = useState(false)

  // Initialize once
  useEffect(() => {
    mermaid.initialize({startOnLoad: false})
  }, [])

  // Inject and run Mermaid on diagram content
  useEffect(() => {
    let isCancelled = false
    initMermaid()

    if (diagramRef.current && text) {
      setError(null)
      setHasRendered(false)

      const pre = document.createElement('pre')
      pre.className = 'mermaid'
      pre.textContent = text // not innerHTML

      diagramRef.current.innerHTML = ''
      diagramRef.current.appendChild(pre)

      mermaid
        .run({nodes: [diagramRef.current]})
        .then(() => {
          if (!isCancelled) setHasRendered(true)
        })
        .catch(err => {
          console.error('Mermaid run error:', err)
          setError('Failed to render diagram. Check Mermaid syntax.')
        })
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
      <div
        ref={diagramRef}
        id={diagramId}
        style={{
          minHeight: '100px',
        }}
      />
      {!hasRendered && !error && (
        <p style={{textAlign: 'center', fontStyle: 'italic'}}>
          Rendering diagram...
        </p>
      )}
    </div>
  )
}

export default MermaidDiagramComponent
