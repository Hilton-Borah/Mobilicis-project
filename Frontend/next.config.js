/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/todos",
        destination: "http://localhost:3001/api/todos",
      },
    ];
  },
}

module.exports = nextConfig
