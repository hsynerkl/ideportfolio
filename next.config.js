/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "vscode-portfolio.vercel.app",
      "avatars.githubusercontent.com",
      "www.apple.com",
    ],
  },
};

module.exports = nextConfig;
