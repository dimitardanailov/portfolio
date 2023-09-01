'use client'

import {FC} from 'react'

import {
  ProjectTitle,
  HeadQuater,
  Industry,
  MarketPlace,
  Position,
} from '../../components'

const Letter: FC = () => {
  return (
    <>
      <ProjectTitle
        title="Elephantstock.com"
        href="https://www.elephantstock.com/"
      />
      <Industry text="eCommerce" />
      <MarketPlace text="USA" />
      <HeadQuater text="USA and Israel" />
      <Position text="Software Engineering Manager / Team Lead" />
      <p>
        Dimitar worked on our flagship project (ecommerce product categorization
        system) and managed to deliver high quality solutions for complex tasks,
        including color quantization, multilevel (tree structure) product
        categorization system, and catalog indexing for search engines, from
        research to planning and implementation. He is a fast learner and always
        eager to enrich his and his team knowledge with best practices and new
        tools.
      </p>
      <p>
        I worked with similar in the same team, it was a pleasure working with
        him. Dimitar brings lots of experience and a wide range of dev
        knowledge, he has the ability to see the wide picture while paying
        attention to the small details.
      </p>
    </>
  )
}

export default Letter
