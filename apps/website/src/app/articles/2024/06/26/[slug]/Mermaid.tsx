import React, {useEffect, useRef, FC} from 'react'
import mermaid from 'mermaid'
import cytoscape from 'cytoscape'

export interface Props {
  text: string
}

const MermaidDiagram: FC<Props> = ({text}) => {
  const ref = useRef(null)

  useEffect(() => {
    mermaid.initialize({startOnLoad: true})

    if (ref.current) {
      mermaid.contentLoaded()
      try {
        mermaid.parse(text) // Ensure the Mermaid code is valid
        mermaid.init(undefined, ref.current) // Render the Mermaid diagram
      } catch (err) {
        console.error('Error rendering Mermaid diagram', err)
      }
    }
  }, [text])
  /*
  

   */

  return <div className="mermaid">{text}</div>
}

export default MermaidDiagram
