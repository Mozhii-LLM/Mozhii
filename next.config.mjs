/** @type {import('next').NextConfig} */
const nextConfig = {
  // Trigger rebuild
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
