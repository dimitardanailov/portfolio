'use client'

import Link from 'next/link'

import articles from './articles'

const Content = async () => {
  const listStyle = 'list-disc mx-6 mt-0 mb-5'

  const listItems = articles.map((article, i) => (
    <li key={i}>
      <Link key={i} title={article.title} href={article.href}>
        <span className="hover:underline">{article.text}</span>
      </Link>
    </li>
  ))

  return <ul className={listStyle}>{listItems}</ul>
}

export default Content
