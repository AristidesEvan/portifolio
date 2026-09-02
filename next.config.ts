import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/trabalho/campanha-pessoal",
        destination: "/colofao",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
