'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import BlogLectureTitle from '@/components/BlogLectureTitle'
import BlogLectureDescription from '@/components/BlogLectureDescription'

const Component = () => {
  const title = 'Distributed Systems in One Lesson by Tim Berglund'

  return (
    <article className="blog-list-article">
      <BlogLectureTitle text={title} />
      <BlogLectureDescription>
        <span>
          Short info: Normally simple tasks like running a program or storing
          and retrieving data become much more complicated when we start to do
          them on collections of computers, rather than single machines.
          Distributed systems has become a key architectural concern, and
          affects everything a program would normally do—giving us enormous
          power, but at the cost of increased complexity as well.
        </span>
      </BlogLectureDescription>
      <span className="text-bold">Video: </span>
      <TargetBlankLink
        href="https://youtu.be/Y6Ev8GIlbxc?si=0WAKvWdmEDmcrVW9"
        text={title}
        title={title}
      />
    </article>
  )
}

export default Component
