'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import BlogLectureTitle from '@/components/BlogLectureTitle'
import BlogLectureDescription from '@/components/BlogLectureDescription'

const Component = () => {
  const title =
    'Holding on to your Performance Promises - Maya Lekova and Benedikt Meurer'

  return (
    <article className="blog-list-article">
      <BlogLectureTitle text={title} />
      <BlogLectureDescription>
        <>
          Lecture Info: The ES2015 revision of JavaScript introduced Promises as
          primitives for asynchronous operations and generators as primitives
          for concurrent programming. On top of that ES2017/18 added async
          functions and generators. This talk briefly explores these primitives,
          and dives into the performance peculiarities of Promises-based
          programming paradigms. We’ll especially look into how these operations
          perform in V8, the JavaScript engine that powers both Node.js and
          Chrome.
        </>
      </BlogLectureDescription>
      <span className="text-bold">Video: </span>
      <TargetBlankLink
        href="https://youtu.be/DFP5DKDQfOc?si=fvDnpKfVNQ-h1-sM"
        text={title}
        title={title}
      />
    </article>
  )
}

export default Component
