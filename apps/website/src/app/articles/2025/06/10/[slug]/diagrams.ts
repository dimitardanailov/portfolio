export const shorteningDiagram = `graph TD;
  A[User clicks short URL] --> B[DNS resolves to Firebase Cloud Function]
  B --> C[Extract shortCode from URL]
  C --> D{Is shortCode in cache?}
  D -- Yes --> E[Retrieve originalLink from cache]
  D -- No --> F[Lookup shortCode in Firestore]
  F --> G[Retrieve originalLink]
  G --> H[Store in cache]
  E --> I[Redirect user]
  H --> I
  I --> J[Log click in Firestore or stream to analytics DB]
`.trim()

export const shortClickDiagram = `graph TD;
  K[User submits originalLink] --> L[Shortening Cloud Function]
  L --> M[Generate shortCode]
  M --> N{Check for collision in Firestore}
  N -- Exists --> M
  N -- Unique --> O[Save ShortenedLink to Firestore]
`.trim()
