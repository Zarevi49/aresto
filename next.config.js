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
      domains: ['http://localhost:8055'],
      remotePatterns: [
        {
          hostname: "localhost",
          port: "8055",
          pathname: "/assets/**",
        },
      ],
    },
    i18n,
    env: {
        RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
        IMAGE_SRC: process.env.IMAGE_SRC,
    },
}

module.exports = nextConfig
