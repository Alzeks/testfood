/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'curiousnut.com'

          },
          {
            protocol: 'https',
            hostname: 'www.youtube.com'
          },
          {
            protocol: 'https',
            hostname: 'www.themealdb.com'
          },
        ],
      },

};

export default nextConfig;
