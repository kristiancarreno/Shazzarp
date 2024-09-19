/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'gravatar.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  output: 'standalone'
}

export default nextConfig
