import nextMDX from "@next/mdx";
import type { NextConfig } from "next";

import remarkGfm from "remark-gfm";
import underlinePlugin from "./underline";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    reactCompiler: true,
  },
  turbopack: {
    
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.hackclub.com",
      },
    ],
  },
};
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, underlinePlugin],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  }
})
export default withMDX(nextConfig);
