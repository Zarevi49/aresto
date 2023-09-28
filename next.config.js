/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
    // images: {
    //     domains: ['0.0.0.0:8055'], // Add the hostname of your image source here
    // },
    // images: {
    //     domains: ['localhost'], // Add "localhost" to the list of allowed domains
    // },
    images: {
      domains: ['http://localhost'],
      remotePatterns: [
        {
          hostname: "localhost",
          port: "8055",
          pathname: "/assets/**",
        },
      ],
    },
    i18n,
}

module.exports = nextConfig
