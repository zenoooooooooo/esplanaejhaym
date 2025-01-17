const nextConfig = {
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/models",
            publicPath: "/_next/static/models",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
