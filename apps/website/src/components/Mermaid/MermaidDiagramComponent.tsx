// components/MermaidDiagramComponent.tsx
import React, {useEffect, useRef, useState, FC} from 'react'
import mermaid from 'mermaid' // Direct import here, as this component will only be loaded client-side dynamically.

export interface Props {
  text: string
  id?: string
}

const MermaidDiagramComponent: FC<Props> = ({text, id}) => {
  const diagramRef = useRef<HTMLHtmlElement>(null) // Use HTMLDivElement for type
  const [diagramId, setDiagramId] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [hasRendered, setHasRendered] = useState(false) // New state to track initial render

  // Effect to generate/set a unique ID for the diagram
  useEffect(() => {
    if (!id) {
      setDiagramId(
        `mermaid-diagram-${Math.random().toString(36).substring(2, 11)}`,
      )
    } else {
      setDiagramId(id)
    }
  }, [id])

  // --- Initialise Mermaid ONLY ONCE when the component mounts ---
  useEffect(() => {
    mermaid.initialize({startOnLoad: false}) // Ensure this runs once
  }, []) // Empty dependency array means this runs only once on component mount

  // Effect to render the diagram when text or diagramId changes
  useEffect(() => {
    if (diagramRef.current && diagramId && text) {
      // Ensure text is also not empty
      setError(null) // Clear previous errors

      // Immediately clear content to show loading state if needed, or before new render
      diagramRef.current.innerHTML = ''
      setHasRendered(false) // Reset render state

      try {
        // Attempt to parse the text for syntax errors
        mermaid.parse(text)

        // Render the new diagram
        mermaid
          .render(diagramId, text)
          .then(({svg, bindFunctions}) => {
            if (diagramRef.current) {
              diagramRef.current.innerHTML = svg
              if (bindFunctions) {
                // IMPORTANT: Bind any interactive functions if the diagram has them
                bindFunctions(diagramRef.current)
              }
              setHasRendered(true) // Diagram has rendered
            }
          })
          .catch(renderErr => {
            console.error('Mermaid render error:', renderErr)
            setError('Failed to render diagram. Check Mermaid syntax.')
          })
      } catch (parseErr: any) {
        console.error('Mermaid parse error:', parseErr)
        // Display the specific parse error message from Mermaid
        setError(
          `Mermaid syntax error: ${parseErr.message || String(parseErr)}`,
        )
      }
    }
    // Cleanup function: Clear the diagram when component unmounts or text/id changes
    return () => {
      if (diagramRef.current) {
        diagramRef.current.innerHTML = ''
      }
    }
  }, [text, diagramId]) // Dependencies: text and diagramId

  // Render the component
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
        <pre style={{whiteSpace: 'pre-wrap', wordBreak: 'break-all'}}>
          {error}
        </pre>
        <p>Input text:</p>
        <pre style={{whiteSpace: 'pre-wrap', wordBreak: 'break-all'}}>
          {text}
        </pre>
      </div>
    )
  }

  return (
    <div
      ref={diagramRef}
      id={diagramId} // Assign the unique ID to the div
      className="mermaid"
      style={{
        overflow: 'auto',
        border: '1px solid #eee',
        padding: '10px',
        borderRadius: '5px',
        minHeight: '50px', // Prevent collapse while loading
        display: 'flex', // For centering loading message
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {!hasRendered && !error && <p>Rendering diagram...</p>}{' '}
      {/* Show loading message only before first render and if no error */}
      {/* Mermaid will inject SVG here */}
    </div>
  )
}

export default MermaidDiagramComponent
