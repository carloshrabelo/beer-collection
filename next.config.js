/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: "images.punkapi.com" }] },
  compiler: {
    styledComponents: {
      displayName: false,
    },
  },
};

module.exports = nextConfig;
