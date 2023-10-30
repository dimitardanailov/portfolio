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
    ]
  },
}

module.exports = nextConfig
