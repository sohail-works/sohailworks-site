/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "sohailworks.com",
          },
        ],
        destination: "https://www.sohailworks.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: '<https://www.sohailworks.com/llms.txt>; rel="alternate"; type="text/plain"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
