/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/landing",
  images: {
    unoptimized: true,
  },
  distDir: "build",
}

export default nextConfig
