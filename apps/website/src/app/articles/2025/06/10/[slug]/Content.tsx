'use client'

import {Slogan} from '@/styled-components'

import Typescript from '@/snippets/typescript'

import {
  shortCodeType,
  shortenedLinkType,
  shortenedLinkClickType,
} from './snippets'

import {slogan} from './seo'

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
        <p className="mb-2">
          Core Architecture: Serverless Redirection. At the heart of our design
          is a serverless redirection mechanism. When a user accesses a short
          URL, such as `fan3.io/[shortCode]`, the DNS record for `fan3.io` is
          configured to point directly to a{' '}
          <strong>Firebase Cloud Function</strong>.
        </p>
        <p>This Cloud Function&lsquo;s primary role is to:</p>
        <ul className={listStyle}>
          <li>Extract the `shortCode` from the incoming request path.</li>
          <li>
            Perform a rapid lookup to find the corresponding `originalLink`.
          </li>
          <li>
            Execute an HTTP 301 (Permanent) or 302 (Temporary) redirect to the
            `originalLink`, guiding the user to their destination.
          </li>
        </ul>
        <p>
          Firebase Cloud Functions offer built-in scalability, automatically
          scaling up to a high number of instances (e.g., 1000 concurrent
          instances) to accommodate sudden traffic spikes. This stateless nature
          of the functions is crucial for handling variable loads without manual
          intervention, though this instance limit serves as a practical ceiling
          that dictates potential extreme scale considerations.
        </p>
        <h2>Data Models & Storage</h2>
        <p>
          Efficient data storage is paramount for both quick lookups and
          comprehensive analytics.
        </p>
        <h3>`ShortenedLink` (Main Data)</h3>
        <p>
          This type represents the core mapping between a short code and its
          original URL, along with basic metadata:
        </p>
        <Typescript Content={shortCodeType} />
        <Typescript Content={shortenedLinkType} />
        <p>
          For storing `ShortenedLink` data, a NoSQL document database like{' '}
          <strong>Firebase Firestore</strong> (or AWS DynamoDB, Azure Cosmos DB)
          is an excellent choice. Its ability to provide fast key-value lookups,
          where `shortCode` would serve as the primary key, perfectly suits the
          read-heavy nature of URL redirection. Firestore&lsquo;s inherent
          scalability supports rapid retrieval of `originalLink` for millions of
          entries.
        </p>
        <h3>`ShortenedLinkClick` (Analytics Data)</h3>
        <p>
          To track each successful redirection for analytics, a separate,
          append-only record is vital:
        </p>
        <Typescript Content={shortenedLinkClickType} />
        <p>
          Given the potentially high volume of click events, a dedicated
          analytics solution is often preferred. While Firestore
          collections&nbsp;
          <span className="font-bold">can</span> store this data, a more robust
          approach for extreme scale might involve streaming these events to a
          data warehouse (e.g., Google BigQuery, Snowflake) or a specialised
          time-series database. This decouples analytics ingestion from the core
          redirection path.
        </p>
        <h2>Shortening Service & Hashing</h2>
        <p>
          The process of creating a short URL involves a separate service. When
          a user provides an `originalLink`, a dedicated Cloud Function (or
          microservice) handles the generation of a unique `shortCode`. This
          typically involves:
        </p>
        <ol>
          <li>
            <strong>Generation:</strong> Using a unique identifier (e.g., base62
            encoding of an auto-incrementing ID, or a cryptographically secure
            hash of the `originalLink` + a salt). The `ShortCode` type&lsquo;s
            `__length: 7` constraint hints at a fixed-length encoding,
            simplifying management.
          </li>
          <li>
            <strong>Collision Handling:</strong> Crucially, the service must
            check if the generated `shortCode` already exists in the
            `ShortenedLink` database. If a collision occurs (rare with good
            hashing/generation strategies), a new `shortCode` is generated until
            uniqueness is guaranteed.
          </li>
          <li>
            <strong>Persistence:</strong> Once unique, the `ShortenedLink`
            object is saved to the main database.
          </li>
        </ol>
        <h2>Achieving Scalability Beyond Basics</h2>
        <p>
          While serverless functions and NoSQL databases provide significant
          out-of-the-box scalability, further optimisations can be implemented:
        </p>
        <ul className={listStyle}>
          <li>
            <strong>Caching:</strong> Implementing a caching layer (e.g., Redis,
            or utilising CDN edge caching features like Cloudflare Workers) for
            frequently accessed `shortCode`s can drastically reduce Cloud
            Function invocations and database reads, especially for
            &ldquo;hot&ldquo; links.
          </li>
          <li>
            <strong>Database Sharding/Partitioning:</strong> For truly massive
            scales, partitioning the `ShortenedLink` database based on aspects
            like `shortCode` ranges can distribute the load and improve lookup
            performance across multiple database instances.
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
        <h2>Conclusion</h2>
        <p>
          Building a scalable URL shortener leverages the power of serverless
          architecture and purpose-built databases. By making the redirection
          service stateless and utilising highly performant data stores for both
          link mapping and analytics, experienced developers can construct a
          robust and efficient system capable of handling substantial web
          traffic with minimal operational overhead.
        </p>
      </>
    </article>
  )
}

export default Content
