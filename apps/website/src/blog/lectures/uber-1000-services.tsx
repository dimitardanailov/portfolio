'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import BlogLectureTitle from '@/components/BlogLectureTitle'
import BlogLectureDescription from '@/components/BlogLectureDescription'

const Component = () => {
  const title = 'What I Wish I Had Known Before Scaling Uber to 1000 Services'

  return (
    <article className="blog-list-article">
      <BlogLectureTitle text={title} />
      <BlogLectureDescription>
        <span>
          Short info: To Keep up with Uber&rsquo;s growth, we&rsquo;ve embraced
          microservices in a big way. This has led to an explosion of new
          services, crossing over 1,000 production services in early March 2016.
          Along the way we&rsquo;ve learned a lot, and if we had to do it all
          over again
        </span>
      </BlogLectureDescription>
      <span className="text-bold">Video: </span>
      <TargetBlankLink
        href="https://youtu.be/kb-m2fasdDY?si=Bl9aA5KzSHnvksp0"
        text="What I Wish I Had Known Before Scaling Uber to 1000 Services • Matt Ranney • GOTO 2016"
        title="What I Wish I Had Known Before Scaling Uber to 1000 Services • Matt Ranney • GOTO 2016"
      />
    </article>
  )
}

export default Component
