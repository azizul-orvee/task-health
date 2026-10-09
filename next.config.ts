import type { NextConfig } from "next";

// Old WordPress slugs → new routes, so existing links and search results keep working.
const legacyRedirects: [string, string][] = [
  ["/about-2", "/about"],
  ["/contact-2", "/contact"],
  ["/customer-review-2", "/reviews"],
  ["/training-2", "/training"],
  ["/recruitment", "/careers"],
  ["/service", "/services"],
  ["/home-page", "/"],
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({ source: `${source}/`, destination, permanent: true }));
  },
};

export default nextConfig;
