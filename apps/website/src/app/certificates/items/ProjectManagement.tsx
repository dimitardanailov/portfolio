'use client'

import {Props} from '@/components/TargetBlankLink'
import ListItems from '@/components/TargetBlankLink/List'

import link from '../utils/link'
import {SectionTitle} from '../components'

const ProjectManagement = () => {
  const items: Props[] = []
  items.push({
    href: link('project-management/starting-successful-project.pdf'),
    title: 'Project Initiation: Starting a Successful Project',
    Element: (
      <span>
        Project Initiation: Starting a Successful Project. Authorized by Google;
      </span>
    ),
  })

  items.push({
    href: link('project-management/foundations.pdf'),
    title: 'Foundations of Project Management',
    Element: (
      <span>Foundations of Project Management. Authorized by Google;</span>
    ),
  })

  return (
    <>
      <SectionTitle text="Project management and Agile Development" />
      <ListItems listItems={items} />
    </>
  )
}

export default ProjectManagement
