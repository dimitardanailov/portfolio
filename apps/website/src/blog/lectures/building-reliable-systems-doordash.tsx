'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import BlogLectureTitle from '@/components/BlogLectureTitle'
import BlogLectureDescription from '@/components/BlogLectureDescription'

const Component = () => {
  const title = 'Building reliable systems with DoorDash'

  return (
    <article className="blog-list-article">
      <BlogLectureTitle text={title} />
      <BlogLectureDescription>
        <span>
          A few key themes: Working on self-driving cars at Uber, The danger of
          optimizing for the wrong metric, Did we over-rotate on microservices?,
          Who needs access to Kubernetes?, The most important thing to know
          before adopting microservices, Chaos engineering vs fault injection,
          What does it mean for DoorDash when a system goes down?, How DoorDash
          makes systems more reliable, How CockroachDB is used at DoorDash
        </span>
      </BlogLectureDescription>
      <span className="text-bold">Video: </span>
      <TargetBlankLink
        href="https://youtu.be/6nIuDNJeE4g?si=063a1GeeNkHJxVXi"
        text="Building reliable systems with DoorDash's Matt Ranney"
        title="Building reliable systems with DoorDash's Matt Ranney"
      />
    </article>
  )
}

export default Component
