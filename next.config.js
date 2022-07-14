// @ts-check
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'media-exp1.licdn.com', '19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com', 'marvelapp.com'],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  pwa: {
    dest: "public",
    swSrc: 'service-worker.js',
  },
}
