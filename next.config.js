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
};

module.exports = nextConfig;
