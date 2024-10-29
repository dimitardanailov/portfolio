'use client'

import StrongLabel from '@/styled-components/Text/StrongLabel'
import {VFlexbox} from '@/styled-components/Grid'

import ListLabel from '@/app/positions/shared/components/ListLabel'

import {width} from '../../consants'
import {listStyle} from '@/shared/tailwind'

const Responsibilities = () => {
  return (
    <VFlexbox className="my-3">
      <StrongLabel width={width}>
        Responsibilities and Achievements:
      </StrongLabel>
      <ul className={listStyle}>
        <li>
          <ListLabel phrase="Rapid Project Completion" /> Successfully completed
          the backend refactoring from Python to Golang within 40-50 days,
          surpassing C-level management&#39;s expectations for the project
          timeline;
        </li>
        <li>
          <ListLabel phrase="Backend Refactoring" /> Supported the migration to
          Golang, ensuring seamless functionality and improved performance;
        </li>
        <li>
          <ListLabel phrase="API Development" /> Recreated existing APIs and
          implemented new endpoints to enhance application capabilities;
        </li>
        <li>
          <ListLabel phrase="TypeScript Integration" /> Introduced TypeScript
          into the project, improving code quality and maintainability;
        </li>
        <li>
          <ListLabel phrase="React Hooks Implementation" /> Developed functional
          and custom React hooks to optimize component reusability and state
          management;
        </li>
        <li>
          <ListLabel phrase="Data Visualization with Sigma.js" /> Researched and
          implemented graph structures using Sigma.js for advanced data
          visualization;
        </li>
        <li>
          <ListLabel phrase="Monitoring with Grafana" /> Set up Grafana for
          system monitoring and analytics to enhance observability;
        </li>
        <li>
          <ListLabel phrase="Additional Achievements" />: The project&#39;s
          success has led to plans for a full front-end refactoring scheduled
          for Spring 2025;
        </li>
      </ul>
    </VFlexbox>
  )
}

export default Responsibilities
