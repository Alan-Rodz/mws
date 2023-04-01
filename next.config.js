/** @type {import('next').NextConfig} */

// ********************************************************************************
// == Config ======================================================================
const nextConfig = {
  images: {
    // REF: https://vercel.com/docs/concepts/image-optimization/managing-image-optimization-costs
    unoptimized: true,

    domains: [
      `${process.env.SUPABASE_PROJECT_ID}.supabase.co`,
    ],
  },

  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.dns = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback['pg-native'] = false;
    } /* else -- is server, resolve fs and dns */

    return config;
  },
};

// == Export ======================================================================
module.exports = nextConfig;
