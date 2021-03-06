module.exports = {
  basePath: "/.",
  // basePath: "/testPage",
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
    return config;
  },
  distDir: "build",
  // trailingSlash: true,
  // assetPrefix: "./",
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
};
