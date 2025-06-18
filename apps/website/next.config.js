/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
})

const withMDX = require('@next/mdx')()

const nextConfig = {
  env: {},
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    legacyBrowsers: false, // Avoid legacy JS
    optimizeCss: true, // Reduce render-blocking CSS
  },
  headers: async () => [
    {
      source: '/:all*(png|ico|webmanifest|jpg|jpeg|woff2)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/recommendation-letters',
        permanent: true,
      },
      {
        source: '/make-your-react-web-apps-discoverable-javascript-seo',
        destination: '/',
        permanent: true,
      },
      {
        source:
          '/my-unexpected-journey-how-we-migrated-an-enterprise-react-application-from-15-to-16',
        destination: '/',
        permanent: true,
      },
      {
        source: '/demo-coingecko',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/',
        permanent: true,
      },
      {
        source: '/positions/certificates',
        destination: '/certificates',
        permanent: true,
      },
      {
        source:
          '/articles/2023/11/28/system-design-collection-about-web-development---scalability-distributed-systems-real-time-and-streaming-microservices-and-monolith',
        destination:
          '/articles/2023/11/28/system-design-collection-about-web-development-scalability-distributed-systems-realtime-and-streaming-microservices-and-monolith',
        permanent: true,
      },
      {
        source: '/positions/positions',
        destination: '/positions',
        permanent: true,
      },
    ]
  },
}

module.exports = withPWA(withMDX(nextConfig))
