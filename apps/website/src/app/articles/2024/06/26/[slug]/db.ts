import {slogan, canonical} from './seo'
import TopicAnalysis from '@/classes/TopicAnalysis'

const listItem = {
  href: canonical,
  title: slogan,
  text: slogan,
}

const topicAnalysis = new TopicAnalysis()
topicAnalysis.addRow(
  'Performance',
  [
    'Reduces database write load.',
    'Improves overall system performance.',
    'Minimizes direct write operations to the database.',
  ],
  [
    'Risk of data loss if cache fails before writing to DB.',
    'Potential inconsistency between cache and database.',
    'Possible delays in data availability due to deferred writes.',
  ],
)
topicAnalysis.addRow(
  'Cost Efficiency',
  [
    'Fewer database write operations can reduce costs.',
    'Reduces need for expensive high-performance storage solutions.',
    'Can lower cloud usage costs by minimizing direct database writes.',
  ],
  [
    'More complex to implement and maintain.',
    'Potential for increased costs due to additional infrastructure for caching.',
    'May require additional resources to monitor and manage the cache.',
  ],
)
topicAnalysis.addRow(
  'Latency',
  [
    'Lower latency for write operations.',
    'Faster data retrieval from cache compared to direct database access.',
    'Improves user experience with quicker response times.',
  ],
  [
    'Increased complexity in cache eviction strategies.',
    'Delayed data propagation to the database can affect real-time data availability.',
    'Requires sophisticated algorithms to ensure cache coherence and freshness.',
  ],
)
topicAnalysis.addRow(
  'Scalability',
  [
    'Can handle high throughput applications effectively.',
    'Scales efficiently with increased load due to reduced database pressure.',
    'Supports horizontal scaling by offloading work from the database.',
  ],
  [
    'Requires careful handling of cache synchronization.',
    'May need complex distributed caching mechanisms in a scaled environment.',
    'Higher maintenance overhead to ensure synchronized cache and database state.',
  ],
)
topicAnalysis.addRow(
  'Use Case Flexibility',
  [
    'Suitable for batch processing and high-write scenarios',
    'Can be tailored to different application needs with configurable caching policies.',
    'Useful in scenarios with predictable access patterns, optimizing performance accordingly.',
  ],
  [
    'Not ideal for applications needing immediate data persistence.',
    'Requires extensive testing to ensure that caching logic does not interfere with application functionality.',
    'Can complicate debugging and troubleshooting due to an additional layer of data storage.',
  ],
)

topicAnalysis.addRow(
  'Use Case Flexibility',
  [
    'Suitable for batch processing and high-write scenarios',
    'Can be tailored to different application needs with configurable caching policies.',
    'Useful in scenarios with predictable access patterns, optimizing performance accordingly.',
  ],
  [
    'Not ideal for applications needing immediate data persistence.',
    'Requires extensive testing to ensure that caching logic does not interfere with application functionality. Requires extensive testing to ensure that caching logic does not interfere with application functionality.',
    'Can complicate debugging and troubleshooting due to an additional layer of data storage.',
  ],
)

export default listItem

export {topicAnalysis}
