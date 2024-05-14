'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import {listStyle} from './shared'

function generateLinkTitle(sufix: string) {
  const prefix = 'Dimitar Danailov, Software Development Contractor - '

  return `${prefix}${sufix}`
}

const Content = () => {
  return (
    <>
      <div className="font-bold">Documents:</div>
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            href="https://ddanailov.dev/resumes/dimitar-danailov.pdf"
            title={generateLinkTitle('resume')}
            text="Resume"
            hoverIsActive={true}
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://ddanailov.dev/resumes/dimitar-danailov-portfolio.pdf"
            title={generateLinkTitle('resume and portfolio')}
            text="Resume and Portfolio"
            hoverIsActive={true}
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://ddanailov.dev/letters/tech-lead.pdf"
            title={generateLinkTitle('Recommendation Letter, Tech Lead')}
            text="Recommendation Letter, Tech Lead"
            hoverIsActive={true}
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://ddanailov.dev/resumes/dimitar-danailov-documents.zip"
            title={generateLinkTitle('Documents')}
            text="Download all documents"
            hoverIsActive={true}
          />
        </li>
      </ul>
    </>
  )
}

export default Content
