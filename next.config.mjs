/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 静的書き出しを有効化 (Next.js 15+)
  output: 'export',
  webpack: (config) => {
    // Webpack の wasm ハッシュ実装バグを回避するため JS 実装を強制
    config.output.hashFunction = 'xxhash64';
    return config;
  }
}

export default nextConfig
