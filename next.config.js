/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_URL: 'http://localhost:8000/api',
  }
}

module.exports = nextConfig
