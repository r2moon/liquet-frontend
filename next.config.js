/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = ``

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload"
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim()
  }
]

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    })
    return config
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/trade",
        permanent: true
      }
    ]
  },
  eslint: {
    dirs: [
      "abis",
      "common",
      "components",
      "helpers",
      "hooks",
      "pages",
      "redux",
      "shared",
      "styles",
      "theme",
      "typechain",
      "utils"
    ]
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders
      }
    ]
  },
  env: {
    usdc: process.env.NEXT_PUBLIC_CONTRACT_USDC || "",
    insuranceFund: process.env.NEXT_PUBLIC_CONTRACT_INSURANCEFUND || "",
    clearingHouse: process.env.NEXT_PUBLIC_CONTRACT_CLEARINGHOUSE || "",
    clearingHouseViewer: process.env.NEXT_PUBLIC_CONTRACT_CLEARINGHOUSEVIEWER || "",
    FTM: process.env.NEXT_PUBLIC_CONTRACT_FTMAMM || "",
    subgraphUrl: process.env.NEXT_PUBLIC_SUBGRAPH_URL || ""
  }
}
