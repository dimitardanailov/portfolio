'use client'

import {Slogan} from '@/styled-components'

import SubTitle from '@/components/ArticleSectionTitle'
import Code from '@/components/CodeInline'
import Paragraph from '@/components/ArticleParagraph'

import Typescript from '@/snippets/typescript'

import {
  shortCodeType,
  shortenedLinkType,
  shortenedLinkClickType,
} from './snippets'

import {slogan} from './seo'
import {shortClickDiagram, shorteningDiagram} from './diagrams'
import ClientOnlyDiagram from '@/components/Mermaid/ClientOnlyDiagram'
import TweetEmbed from '@/components/TweetEmbed'

const Content = () => {
  const listStyle = 'list-disc mx-6 mt-0 mb-5'

  return (
    <article>
      <Slogan>{slogan}</Slogan>

      <>
        <p className="mb-2">
          URL shorteners are ubiquitous, transforming lengthy web addresses into
          compact, shareable links. While conceptually simple, building a robust
          and scalable shortener requires careful architectural consideration,
          especially to handle high traffic and efficient redirection. This
          article outlines a high-level serverless approach, ideal for
          experienced developers.
        </p>
        <SubTitle>
          Handles caching, redirection, and click logging on Cloud Function
          trigger
        </SubTitle>
        <div className="mt-2 mb-2">
          <ClientOnlyDiagram text={shorteningDiagram} id="shorteningDiagram" />
        </div>
        <SubTitle>Core Architecture: Serverless Redirection</SubTitle>
        <Paragraph>
          At the heart of our design is a serverless redirection mechanism. When
          a user accesses a short URL, such as
          <Code>a.fan3.io/[:shortCode]</Code>, the DNS record for a.fan3.io is
          configured to point directly to a{' '}
          <strong>Firebase Cloud Function</strong>.
        </Paragraph>
        <p>This Cloud Function&lsquo;s primary role is to:</p>
        <ul className={listStyle}>
          <li>
            Extract the <Code>shortCode</Code> from the incoming request path.
          </li>
          <li>
            Perform a rapid lookup to find the corresponding{' '}
            <Code>originalLink</Code>.
          </li>
          <li>
            Execute an HTTP 301 (Permanent) or 302 (Temporary) redirect to the
            <Code>originalLink</Code>, guiding the user to their destination.
          </li>
        </ul>
        <Paragraph>
          Firebase Cloud Functions offer built-in scalability, automatically
          scaling up to a high number of instances (e.g., 1000 concurrent
          instances) to accommodate sudden traffic spikes. This stateless nature
          of the functions is crucial for handling variable loads without manual
          intervention, though this instance limit serves as a practical ceiling
          that dictates potential extreme scale considerations.
        </Paragraph>
        <SubTitle>Data Models & Storage</SubTitle>
        <Paragraph>
          Efficient data storage is paramount for both quick lookups and
          comprehensive analytics. When designing a URL shortener, the choice of
          database and the structure of your data models directly impact
          performance, scalability, and the richness of insights you can gather.
          We need to ensure that the primary function - redirecting users - is
          lightning-fast, while also having the capacity to log and analyse vast
          amounts of click data.
        </Paragraph>
        <SubTitle>
          Cloud Function-driven flow for generating unique short codes
        </SubTitle>
        <div className="mt-2 mb-2">
          <ClientOnlyDiagram text={shortClickDiagram} id="shortClickDiagram" />
        </div>
        <SubTitle>
          <Code>ShortenedLink</Code> (Main Data)
        </SubTitle>
        <Paragraph>
          This type represents the core mapping between a short code and its
          original URL. It serves as the definitive record for each shortened
          link, including essential metadata required for its function and basic
          tracking. This model is designed to be highly accessible and optimised
          for rapid retrieval during the redirection process.
        </Paragraph>
        <Typescript Content={shortCodeType} />
        <Typescript Content={shortenedLinkType} />
        <Paragraph>
          For storing <Code>ShortenedLink</Code> data, a NoSQL document database
          like <strong>Firebase Firestore</strong> (or AWS DynamoDB, Azure
          Cosmos DB) is an excellent choice. Its ability to provide fast
          key-value lookups, where <Code>shortCode</Code> would serve as the
          primary key, perfectly suits the read-heavy nature of URL redirection.
          Firestore&lsquo;s inherent scalability supports rapid retrieval of
          <Code>originalLink</Code> for millions of entries.
        </Paragraph>
        <SubTitle>
          <Code>ShortenedLinkClick</Code> (Analytics Data)
        </SubTitle>
        <Paragraph>
          To track each successful redirection for analytics, a separate,
          append-only record is vital:
        </Paragraph>
        <Typescript Content={shortenedLinkClickType} />
        <Paragraph>
          Given the potentially high volume of click events, a dedicated
          analytics solution is often preferred. While Firestore
          collections&nbsp;
          <span className="font-bold">can</span> store this data, a more robust
          approach for extreme scale might involve streaming these events to a
          data warehouse (e.g., Google BigQuery, Snowflake) or a specialised
          time-series database. This decouples analytics ingestion from the core
          redirection path.
        </Paragraph>
        <SubTitle>Shortening Service & Hashing</SubTitle>
        <Paragraph>
          The process of creating a short URL involves a separate service. When
          a user provides an <Code>originalLink</Code>, a dedicated Cloud
          Function (or microservice) handles the generation of a unique{' '}
          <Code>shortCode</Code>. This typically involves:
        </Paragraph>
        <ul className="list-decimal mx-6 mt-0 mb-5">
          <li>
            <strong>Generation:</strong> Using a unique identifier (e.g., base62
            encoding of an auto-incrementing ID, or a cryptographically secure
            hash of the <Code>originalLink</Code> + a salt). The{' '}
            <Code>ShortCode</Code> type&lsquo;s <Code>__length: 7</Code>{' '}
            constraint hints at a fixed-length encoding, simplifying management.
          </li>
          <li>
            <strong>Collision Handling:</strong> Crucially, the service must
            check if the generated <Code>shortCode</Code> already exists in the
            <Code>ShortenedLink</Code> database. If a collision occurs (rare
            with good hashing/generation strategies), a new{' '}
            <Code>shortCode</Code> is generated until uniqueness is guaranteed.
          </li>
          <li>
            <strong>Persistence:</strong> Once unique, the{' '}
            <Code>ShortenedLink</Code>
            object is saved to the main database.
          </li>
        </ul>
        <SubTitle>Achieving Scalability Beyond Basics</SubTitle>
        <Paragraph>
          While serverless functions and NoSQL databases provide significant
          out-of-the-box scalability, further optimisations can be implemented:
        </Paragraph>
        <ul className={listStyle}>
          <li>
            <strong>Caching:</strong> Implementing a caching layer (e.g., Redis,
            or utilising CDN edge caching features like Cloudflare Workers) for
            frequently accessed <Code>shortCodes</Code> can drastically reduce
            Cloud Function invocations and database reads, especially for
            &ldquo;hot&ldquo; links.
          </li>
          <li>
            <strong>Database Sharding/Partitioning:</strong> For truly massive
            scales, partitioning the <Code>ShortenedLink</Code> database based
            on aspects like <Code>shortCode</Code> ranges can distribute the
            load and improve lookup performance across multiple database
            instances.
          </li>
          <li>
            <strong>Rate Limiting & Abuse Prevention:</strong> Essential for
            protecting your services from spam or malicious requests.
          </li>
          <li>
            <strong>Geographical Distribution:</strong> Deploying functions and
            databases in multiple regions can reduce latency for users
            worldwide.
          </li>
        </ul>
        <SubTitle>Conclusion</SubTitle>
        <Paragraph>
          Building a scalable URL shortener leverages the power of serverless
          architecture and purpose-built databases. By making the redirection
          service stateless and utilising highly performant data stores for both
          link mapping and analytics, experienced developers can construct a
          robust and efficient system capable of handling substantial web
          traffic with minimal operational overhead.
        </Paragraph>
        <TweetEmbed tweetUrl="https://twitter.com/pitbull/status/1927762541955994000" />
      </>
    </article>
  )
}

export default Content
