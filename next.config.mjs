import { withPayload } from '@payloadcms/next/withPayload'
import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      ...NEXT_PUBLIC_SERVER_URL.split(',').map((item) => {
        const url = new URL(item.trim())

        return {
          protocol: url.protocol.replace(':', ''), // 'http' or 'https'
          hostname: url.hostname, // 'localhost'
          port: url.port, // optional
          pathname: '/api/media/file/**', // adjust to match your image path
        }
      }),
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  redirects,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
