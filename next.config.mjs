/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: isProd
    ? "/pariazandihamedani-portfolio"
    : "",

  assetPrefix: isProd
    ? "/pariazandihamedani-portfolio/"
    : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;