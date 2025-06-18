import {useEffect, useRef} from 'react'

const TweetEmbed = ({tweetUrl}: {tweetUrl: string}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    containerRef.current?.appendChild(script)
  }, [])

  return (
    <div ref={containerRef}>
      <blockquote className="twitter-tweet">
        <a href={tweetUrl} />
      </blockquote>
    </div>
  )
}

export default TweetEmbed
