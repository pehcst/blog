/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    //prsmic
    NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN,
    NEXT_PUBLIC_PRISMIC_API: process.env.PRISMIC_API,
    NEXT_PUBLIC_GA_ID: process.env.GOOGLE_ANALYTICS,
  },
}

module.exports = nextConfig
