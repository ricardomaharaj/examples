/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
}
