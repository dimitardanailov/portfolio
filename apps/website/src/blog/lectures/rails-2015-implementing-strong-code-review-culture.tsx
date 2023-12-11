'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import BlogLectureTitle from '@/components/BlogLectureTitle'
import BlogLectureDescription from '@/components/BlogLectureDescription'

const Component = () => {
  const title = 'Implementing a Strong Code-Review Culture'

  return (
    <article className="blog-list-article">
      <BlogLectureTitle text={title} />
      <BlogLectureDescription>
        <>
          Code reviews are not about catching bugs. Modern code reviews are
          about socialization, learning, and teaching. How can you get the most
          out of a peer&rsquo;s code review and how can you review code without
          being seen as overly critical? Reviewing code and writing
          easily-reviewed features are skills that will make you a better
          developer and a better teammate. You will leave this talk with the
          tools to implement a successful code-review culture. You&rsquo;ll
          learn how to get more from the reviews you&rsquo;re already getting
          and how to have more impact with the reviews you leave.
        </>
      </BlogLectureDescription>
      <span className="text-bold">Video: </span>
      <TargetBlankLink
        href="https://youtu.be/PJjmw9TRB7s?si=hJo0fg9fdBh-ayaL"
        text={title}
        title={title}
      />
    </article>
  )
}

export default Component
