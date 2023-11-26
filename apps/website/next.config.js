/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
})

const withMDX = require('@next/mdx')()

const nextConfig = {
  env: {},
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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
    ]
  },
}

module.exports = withPWA(withMDX(nextConfig))
