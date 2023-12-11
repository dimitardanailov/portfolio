'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import BlogLectureTitle from '@/components/BlogLectureTitle'
import BlogLectureDescription from '@/components/BlogLectureDescription'

const Component = () => {
  const title =
    'Docker Containers and Kubernetes Fundamentals: Full Hands-On Course'

  return (
    <article className="blog-list-article">
      <BlogLectureTitle text={title} />
      <BlogLectureDescription>
        <>
          Learn how to use Docker and Kubernetes in this complete hand-on course
          for beginners, how to containerize applications with the Docker CLI
          and Visual Studio Code, push and pull container images on Docker Hub,
          a container registry, and create multi-container applications using
          Docker Compose. Learn about the Kubernetes architecture and how it
          works. Run it locally and use the Kubernetes CLI and Visual Studio
          Code to run, debug and troubleshoot applications and services. Learn
          about pods and the different workloads available.
        </>
      </BlogLectureDescription>
      <span className="text-bold">Video: </span>
      <TargetBlankLink
        href="https://youtu.be/kTp5xUtcalw?si=yYxlyOqS1_0tlR1E"
        text={title}
        title={title}
      />
    </article>
  )
}

export default Component
