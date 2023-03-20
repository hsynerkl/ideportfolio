/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["vscode-portfolio.vercel.app"],
  },
};

module.exports = nextConfig;
