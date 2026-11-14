/** @type {import('next').NextConfig} */
const nextConfig = {
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
