import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <script src="/static/datafeeds/udf/dist/polyfills.js" /> */}
          <script async src="/static/datafeeds/udf/dist/bundle.js" />
          <meta name="msapplication-TileColor" content="#03161d" />
          <meta name="msapplication-config" content="/assets/icons/browserconfig.xml" />
          <meta name="theme-color" content="#03161d" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
          <link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg" color="#03161d" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* <!-- OGP --> */}
          <meta property="og:title" content="Redefining What's Possible in Decentralized Finance" />
          <meta
            property="og:description"
            content="Explore innovative DeFi protocols that include a multi-chain DEX Aggregator, Perpetual Swaps DEX, and a one-click yield farming tool."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://matrix-labs.xyz" />
          <meta property="og:image" content="/images/social/landing.png" />

          {/* <!-- Twitter --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@matrixswap" />
          <meta name="twitter:title" content="Redefining What's Possible in Decentralized Finance" />
          <meta
            name="twitter:description"
            content="Explore innovative DeFi protocols that include a multi-chain DEX Aggregator, Perpetual Swaps DEX, and a one-click yield farming tool."
          />
          <meta name="twitter:image:src" content="/images/social/landing.png" />
          <meta name="twitter:image:alt" content="Screenshot of the Matrix Labs 'Landing' page." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
