/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true, // triggers 308
      },
    ];
  },
}
