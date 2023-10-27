'use client'

import {FC} from 'react'

import {PersonInfo} from '../../../components'

import source from '@/data/testimonials/images/elephantstock/davidTarbay'

const Letter: FC = () => {
  return (
    <>
      <PersonInfo
        name="David Tarbay"
        source={source}
        title="Head of Product elephantstock.com"
      />
      <div>
        <p>
          Dimitar worked on our flagship project (ecommerce product
          categorization system) and managed to deliver high quality solutions
          for complex tasks, including color quantization, multilevel (tree
          structure) product categorization system, and catalog indexing for
          search engines, from research to planning and implementation. He is a
          fast learner and always eager to enrich his and his team knowledge
          with best practices and new tools.
        </p>
      </div>
    </>
  )
}

export default Letter
