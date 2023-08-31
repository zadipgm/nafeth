/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  headers: async () => [
    {
      source: "/:all*(svg|jpg|png)",
      locale: false,
      headers: [
        { key: "Cache-control", value: "public, immutable, max-age=31536000" },
      ],
    },
  ],
  transpilePackages: ["@mui/x-charts"],
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "en",
    localeDetection: false,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
