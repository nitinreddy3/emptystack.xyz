// @ts-check
const withPWA = require('next-pwa')({
dest: 'public',
disable: process.env.NODE_ENV === 'development',
register: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
images: {
    domains: ['res.cloudinary.com', 'media-exp1.licdn.com', '19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com', 'marvelapp.com', 'api.daily.dev'],
},
i18n: {
    locales: ["en"],
    defaultLocale: "en",
}
};

module.exports = withPWA(nextConfig);
