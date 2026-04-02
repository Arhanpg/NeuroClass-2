/** @type {import('next').NextConfig} */
const nextConfig = {
  // serverComponentsExternalPackages was promoted from experimental to
  // top-level stable config in Next.js 14.1. Keeping it in experimental{}
  // causes a build error on Vercel with Next 14.2.x.
  serverExternalPackages: [],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
};

module.exports = nextConfig;
