/** @type {import('next').NextConfig} */
const nextConfig = {
  //프론트서버주소 이미지 src 사용할때
  async rewrites() {
    return [
      {
        source: "/upload/:slug",
        destination: "http://localhost:9090/upload/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
