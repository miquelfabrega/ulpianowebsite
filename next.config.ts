import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/planificador-herencias",
        destination: "/soluciones/planificacion-sucesoria",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
