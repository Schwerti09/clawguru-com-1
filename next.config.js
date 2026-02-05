/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Vercel-Deploy-Sicherheit: Build nicht wegen ESLint blockieren
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
