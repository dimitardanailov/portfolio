'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import {Slogan} from '@/styled-components'
import {Keyword} from '@/components/SEO'

const Content = () => {
  const listStyle = 'list-disc mx-6 mt-0 mb-5'

  return (
    <>
      <Slogan>
        Resources about system design, distributed systems, microservices and
        monolith
      </Slogan>

      <p>
        I&#39;ve been working like a <Keyword word="contractor" />,{' '}
        <Keyword word="full stack engineer" /> or{' '}
        <Keyword word="b2b contractor" /> in the past several years. The
        important subjects of my daily work are:
      </p>

      <ul className={listStyle}>
        <li>
          <Keyword word="System design" />
        </li>
        <li>
          <Keyword word="Web Development - Scalability" />
        </li>
        <li>
          <Keyword word="Distributed Systems" />
        </li>
        <li>
          <Keyword word="Real-Time and Streaming" />
        </li>
        <li>
          <Keyword word="Microservices and monolith" />
        </li>
        <li>
          <Keyword word="Automation testing" />
        </li>
        <li>
          <Keyword word="Fault-Tolerant Systems" />
        </li>
      </ul>

      <p>I&#39;ve been using like a list with materials:</p>

      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            href="https://youtu.be/-W9F__D3oY4?si=1J8XFY58ZwfZLn6X"
            text="Scalability Web Development by David Malan"
            title="CS75 (Summer 2012) Lecture 9 Scalability Harvard Web Development David Malan"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://youtu.be/Y6Ev8GIlbxc?si=0WAKvWdmEDmcrVW9"
            text="Distributed Systems in One Lesson by Tim Berglund"
            title="Distributed Systems in One Lesson by Tim Berglund"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://youtu.be/52SgGFpWjsY"
            text="Agoric + Protocol Labs // Part 1 - Distributed Programming for a Decentralized World - Mark Miller"
            title="Agoric + Protocol Labs // Part 1 - Distributed Programming for a Decentralized World - Mark Miller"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://youtu.be/yqc3PPmHvrA?si=ZYC2lA1DIXBc5lwe"
            text="Streaming a Million Likes/Second: Real-Time Interactions on Live Video"
            title="Streaming a Million Likes/Second: Real-Time Interactions on Live Video"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://youtu.be/DihXpZ9xR8E?si=_jvR0KwUw_A9UHxV"
            text="Building Scalable, Highly Concurrent and Fault-Tolerant Systems: Lessons Learned"
            title="Building Scalable, Highly Concurrent and Fault-Tolerant Systems: Lessons Learned"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://youtu.be/wgdBVIX9ifA?si=GU0hLNilz-7Mn30E"
            text="Microservices • Martin Fowler • GOTO 2014"
            title="Microservices • Martin Fowler • GOTO 2014"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://youtu.be/kb-m2fasdDY?si=Bl9aA5KzSHnvksp0"
            text="What I Wish I Had Known Before Scaling Uber to 1000 Services • Matt Ranney • GOTO 2016"
            title="What I Wish I Had Known Before Scaling Uber to 1000 Services • Matt Ranney • GOTO 2016"
          />
        </li>
      </ul>
    </>
  )
}

export default Content
