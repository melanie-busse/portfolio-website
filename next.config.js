/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["de", "en", "da"],
    defaultLocale: "de",
  },
  compiler: {
    styledComponents: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
