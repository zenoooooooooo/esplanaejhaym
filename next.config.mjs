const nextConfig = {
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  webpack: (config, { isServer }) => {
    // Add a rule to handle `.glb` and `.gltf` files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/models", // Where the files will be stored in the build
            publicPath: "/_next/static/models", // URL path to access the files
            name: "[name].[hash].[ext]", // File naming format
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
