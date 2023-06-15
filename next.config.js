require('dotenv').config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/account/detail/:id',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http://localhost:3001', // フロントエンドのURLに置き換える
          },
        ],
      },
    ];
  },

}

// module.exports = nextConfig
module.exports = {
  env: {
    API_URL: process.env.API_URL,
  }
}
