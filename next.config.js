require('dotenv').config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/customer/detail/:id',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.FRONT_URL, // フロントエンドのURLに置き換える
          },
        ],
      },
      {
        source: '/login',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.FRONT_URL,
          }
        ]
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {key: 'Access-Control-Allow-Origin',
          value: 'https://fonts.googleapis.com/'}
        ]
      }
    ];
  }
}

// module.exports = nextConfig
module.exports = {
  env: {
    API_URL: process.env.API_URL,
    FRONT_URL: process.env.FRONT_URL,
  }
}
