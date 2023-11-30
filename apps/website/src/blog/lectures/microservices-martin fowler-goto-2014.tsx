'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import BlogLectureTitle from '@/components/BlogLectureTitle'
import BlogLectureDescription from '@/components/BlogLectureDescription'

const Component = () => {
  const title = 'Microservices - Martin Fowler'

  return (
    <article className="blog-list-article">
      <BlogLectureTitle text={title} />
      <BlogLectureDescription>
        <span>
          Lecture items: Monolith vs. microservices, Definition of
          microservices, Characteristics of microservices, Componentization via
          services, Organized around business capabilities, Decentralized data
          management, Infrastructure automation, Design for failure, Are
          microservices just SOA?, How big is a microservice?, Monolith vs.
          microservices
        </span>
      </BlogLectureDescription>
      <span className="text-bold">Video: </span>
      <TargetBlankLink
        href="https://youtu.be/wgdBVIX9ifA?si=GU0hLNilz-7Mn30E"
        text="Microservices • Martin Fowler • GOTO 2014"
        title="Microservices • Martin Fowler • GOTO 2014"
      />
    </article>
  )
}

export default Component
