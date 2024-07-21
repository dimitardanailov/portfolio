import Label from '@/components/SimpleLabel'

const Body = () => {
  const listStyle = 'list-disc mx-6 mt-0 mb-5'

  return (
    <>
      <p>
        A write-back cache is a type of caching mechanism where data
        modifications are initially written to the cache rather than directly to
        the main database. This approach enhances performance by reducing the
        number of direct write operations to the database, as the cached data is
        written back to the database at a later time. Write-back caching is
        particularly beneficial in high-write frequency applications and
        scenarios requiring quick data access and lower latency. However, it
        requires careful management to ensure data consistency and integrity, as
        there is a risk of data loss if the cache fails before the data is
        written to the database.
      </p>

      <p className="mt-2">
        <span className="font-bold text-lg">When to Use Write-Back Cache:</span>
      </p>

      <ul className={listStyle}>
        <li>
          <Label text="High Write Frequency" /> When the application has a high
          volume of write operations, and performance is critical. The
          write-back cache can reduce the number of write operations to the
          database, thus improving performance.
        </li>
        <li>
          <Label text="Batch Processing" /> In scenarios where data can be
          processed in batches, such as analytics workloads where intermediate
          results can be cached and written to the database later.
        </li>
        <li>
          <Label text="Temporary Data Storage" /> When dealing with temporary
          data that does not need immediate persistence, such as session data in
          a web application.
        </li>
        <li>
          <Label text="Network Latency" /> When the database is hosted on a
          remote server, and reducing the number of network calls is beneficial.
        </li>
        <li>
          <Label text="Cost Optimization" /> In cloud environments where
          database writes incur cost, reducing the number of direct writes can
          lead to cost savings.
        </li>
      </ul>

      <p className="mt-1">
        <span className="font-bold text-lg">
          When to Avoid Write-Back Cache:
        </span>
      </p>

      <ul className={listStyle}>
        <li>
          <Label text="Data Integrity Critical" /> When data integrity is
          paramount, and any data loss due to cache failure is unacceptable,
          such as in financial transactions.
        </li>
        <li>
          <Label text="Low Write Frequency" /> In applications where write
          operations are infrequent, the complexity and potential issues of
          write-back caching may not be justified.
        </li>
        <li>
          <Label text="Real-Time Systems" /> For real-time systems where
          immediate data availability and consistency are required, such as live
          trading platforms.
        </li>
        <li>
          <Label text="High Volatility" /> When data changes frequently and
          needs to be immediately reflected across all systems and users, like
          collaborative editing tools.
        </li>
        <li>
          <Label text="Simple Architectures" /> In simpler applications where
          the overhead of managing a write-back cache might outweigh the
          performance benefits.
        </li>
      </ul>
    </>
  )
}

export default Body
