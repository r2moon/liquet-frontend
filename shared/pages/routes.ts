export const Routes = {
  home: `/`,
  trade: `/trade`,
  tradePair: (pair: string) => `/trade/${pair}`,
  restrictedCountry: `/restricted-country`
}

export const ExternalRoutes = {
  social: {
    telegram: `https://t.me/matrixswapofficial`,
    twitter: `https://twitter.com/matrixswap`,
    discord: `https://discord.com/invite/nRJXNtZBe6`,
    medium: `https://matrixlabs.medium.com/`
  },
  document: {
    perpDocs: `https://docs.matrixswap.io/introduction/matrix-labs-overview/about-matrixperp`,
    perpTutorial: `https://docs.matrixswap.io/matrixperp-perpetual-dex/how-to-start-trading-on-matrixperp-beta-mainnet`,
    termsOfUse: `https://matrix-labs.xyz/document/terms-of-use`
  }
}
