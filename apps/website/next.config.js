/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
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
    ]
  },
}

module.exports = nextConfig
