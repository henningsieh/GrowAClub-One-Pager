/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable the Image Optimization API
  },
  output: "export", // This tells Next.js to export a static site
  webpack: function (config) {
    // Add raw-loader for .md files
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};

export default nextConfig;
