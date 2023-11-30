'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import BlogLectureTitle from '@/components/BlogLectureTitle'
import BlogLectureDescription from '@/components/BlogLectureDescription'

const Component = () => {
  const title =
    'Building Scalable, Highly Concurrent and Fault-Tolerant Systems'

  return (
    <article className="blog-list-article">
      <BlogLectureTitle text={title} />
      <BlogLectureDescription>
        <span>
          Short info: The skills of building Scalable, Highly Concurrent and
          Fault-Tolerant Systems are becoming increasingly important in our new
          world of Cloud Computing, multi-core processors, Big Data and
          Real-Time Web. Unfortunately, many people are still doing it wrong;
          using the wrong tools, techniques, habits and ideas. In this talk we
          will look at some of the most common (and some not so common but
          superior) practices; what works - what doesn&rsquo;t work - and why.
        </span>
      </BlogLectureDescription>
      <span className="text-bold">Video: </span>
      <TargetBlankLink
        href="https://youtu.be/DihXpZ9xR8E?si=_jvR0KwUw_A9UHxV"
        text="Building Scalable, Highly Concurrent and Fault-Tolerant Systems: Lessons Learned"
        title="Building Scalable, Highly Concurrent and Fault-Tolerant Systems: Lessons Learned"
      />
    </article>
  )
}

export default Component
