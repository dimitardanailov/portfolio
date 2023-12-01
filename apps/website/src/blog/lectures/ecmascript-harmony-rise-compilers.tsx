'use client'

import TargetBlankLink from '@/components/TargetBlankLink'
import BlogLectureTitle from '@/components/BlogLectureTitle'
import BlogLectureDescription from '@/components/BlogLectureDescription'

const Component = () => {
  const title = 'ECMAScript Harmony: Rise of the Compilers - Brendan Eich'

  return (
    <article className="blog-list-article">
      <BlogLectureTitle text={title} />
      <BlogLectureDescription>
        <>
          <span className="block">
            About Brendan Eich: Brendan Eich was founder and long-term CTO at
            Mozilla. He also served as SVP of Engineering and briefly as CEO.
            Eich is widely recognized for his enduring contributions to the
            Internet revolution. In 1995, Eich invented JavaScript (ECMAScript),
            the Internet&rsquo;s most widely used programming language. He
            co-founded the mozilla.org project in 1998, serving as chief
            architect, and has been a board member of the Mozilla Foundation
            since its inception in 2003. Brendan helped launch the award-winning
            Firefox Web browser in November 2004 and Thunderbird e-mail client
            in December 2004.
          </span>
          <span className="block">
            Lecture Info: From Fluent 2015. "JavaScript is almost 20 years old,
            and moving faster than ever. ES6/2015 was voted through Ecma TC39 in
            Paris last month, ES7/2016 is being developed concurrently to prime
            the annual release pump, and use of compilers, notably Babel and
            Traceur, is on the rise. Low-level APIs such as SIMD, WebGL2, and
            64-bit integer Math methods combine with higher-level facilities
            from generators and promises to async/await to cover the space of
            safely programmable hardware. Is there anything JS cannot do? I’ll
            give some answers.
          </span>
        </>
      </BlogLectureDescription>
      <span className="text-bold">Video: </span>
      <TargetBlankLink
        href="https://youtu.be/PlmsweSNhTw?si=UZ0inDrwp-sIBjp3"
        text={title}
        title={title}
      />
    </article>
  )
}

export default Component
