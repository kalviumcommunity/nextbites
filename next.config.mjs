/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// Static export so the app can be hosted on GitHub Pages at /nextbites.
const nextConfig = {
  output: "export",
  basePath: isProd ? "/nextbites" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
