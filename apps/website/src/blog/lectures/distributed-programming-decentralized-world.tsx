'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import BlogLectureTitle from '@/components/BlogLectureTitle'
import BlogLectureDescription from '@/components/BlogLectureDescription'

const Component = () => {
  const title =
    'Distributed Programming for a Decentralized World - Mark Miller'

  return (
    <article className="blog-list-article">
      <BlogLectureTitle text={title} />
      <BlogLectureDescription>
        <span>
          Short info: To reach our goal of bringing the world economy into the
          decentralized world, we need to improve the developer experience.
          Current approaches to smart contract and dApp development are too
          hazardous, non-composable, use unfamiliar languages, and are subject
          to single-chain lock-in. We introduce the Agoric stack for creating
          safe, composable and interoperable smart contracts.
        </span>
      </BlogLectureDescription>
      <span className="text-bold">Video: </span>
      <TargetBlankLink
        href="https://youtu.be/52SgGFpWjsY"
        text="Agoric + Protocol Labs // Part 1 - Distributed Programming for a Decentralized World - Mark Miller"
        title="Agoric + Protocol Labs // Part 1 - Distributed Programming for a Decentralized World - Mark Miller"
      />
    </article>
  )
}

export default Component
