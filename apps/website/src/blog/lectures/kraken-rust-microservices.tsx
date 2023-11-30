'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import BlogLectureTitle from '@/components/BlogLectureTitle'
import BlogLectureDescription from '@/components/BlogLectureDescription'

const Component = () => {
  const title = "Kraken's migration to Rust microservices"

  return (
    <article className="blog-list-article">
      <BlogLectureTitle text={title} />
      <BlogLectureDescription>
        <span>
          Short info: Marco and Rob talk about Kraken&rsquo;s migration to Rust
          microservices and the significant performance improvements, massive
          drop in memory usage, and substantial reductions in AWS spending it
          brought along. They also emphasize the stability advancements that
          Rust provides, and Rob highlights that errors like null pointer
          exceptions that were frequent in Java are no longer possible in Rust.
          Finally, they discuss updates in Rust&rsquo;s web development
          ecosystem and actix specifically, and Rob shares his view on how
          improvements in the language and framework space will eventually lead
          to a future where web development in Rust can be as approachable as
          development with e.g. express.js.
        </span>
      </BlogLectureDescription>
      <span className="text-bold">Video: </span>
      <TargetBlankLink
        href="https://youtu.be/DihXpZ9xR8E?si=_jvR0KwUw_A9UHxV"
        text="Kraken's migration to Rust microservices - with Rob Ede"
        title="Kraken's migration to Rust microservices - with Rob Ede"
      />
    </article>
  )
}

export default Component
