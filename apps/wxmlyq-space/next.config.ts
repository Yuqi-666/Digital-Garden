/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 关键：指定静态导出模式
  images: {
    unoptimized: true, // 禁用 Next.js 图片优化（静态导出不支持）
  },
};

export default nextConfig;
