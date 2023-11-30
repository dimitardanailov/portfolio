'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import BlogLectureTitle from '@/components/BlogLectureTitle'
import BlogLectureDescription from '@/components/BlogLectureDescription'

const Component = () => {
  const title = 'Streaming a Million Likes/Second'

  return (
    <article className="blog-list-article">
      <BlogLectureTitle text={title} />
      <BlogLectureDescription>
        <span>
          Short info: Akhilesh Gupta does a technical deep-dive into how
          LinkedIn uses the Play/Akka Framework and a scalable distributed
          system to enable live interactions like likes/comments at massive
          scale at extremely low costs across multiple data centers.
        </span>
      </BlogLectureDescription>
      <span className="text-bold">Video: </span>
      <TargetBlankLink
        href="https://youtu.be/yqc3PPmHvrA?si=ZYC2lA1DIXBc5lwe"
        text="Streaming a Million Likes/Second: Real-Time Interactions on Live Video"
        title="Streaming a Million Likes/Second: Real-Time Interactions on Live Video"
      />
    </article>
  )
}

export default Component
