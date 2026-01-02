/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure source maps are disabled in production to prevent code exposure
  productionBrowserSourceMaps: false,
  // Enable image optimization for better performance
  images: {
    unoptimized: false,
  },
}

export default nextConfig
