/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable the Image Optimization API
  },
  output: "export", // This tells Next.js to export a static site
};

export default nextConfig;
