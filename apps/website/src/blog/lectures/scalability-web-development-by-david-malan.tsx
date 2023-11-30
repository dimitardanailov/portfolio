'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import BlogLectureTitle from '@/components/BlogLectureTitle'
import BlogLectureDescription from '@/components/BlogLectureDescription'

const Component = () => {
  const title = 'Scalability Web Development by David Malan'

  return (
    <article className="blog-list-article">
      <BlogLectureTitle text={title} />
      <BlogLectureDescription>
        <span>
          Lecture items: Web Hosts, VPSes, Vertical Scaling, Horizontal Scaling,
          PHP Acceleration, PHP Accelerators, Load Balancing, Load Balancing
          with BIND, Sticky Sessions, Load Balancers, Caching
        </span>
      </BlogLectureDescription>
      <span className="text-bold">Video: </span>
      <TargetBlankLink
        href="https://youtu.be/-W9F__D3oY4?si=1J8XFY58ZwfZLn6X"
        text={title}
        title="CS75 (Summer 2012) Lecture 9 Scalability Harvard Web Development David Malan"
      />
    </article>
  )
}

export default Component
