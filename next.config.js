/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "en",
    localeDetection: false,
  },
  trailingSlash: true,
};
module.exports = nextConfig;
