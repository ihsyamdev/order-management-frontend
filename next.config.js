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
    ];
  },

}

// module.exports = nextConfig
module.exports = {
  env: {
    API_URL: process.env.API_URL,
    FRONT_URL: process.env.FRONT_URL,
  }
}
