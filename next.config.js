/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com'
      },
    ],
  },
  experimental: {
    appDir: true,
    // enableUndici: true   use this if Node < v18
  },
}

module.exports = nextConfig