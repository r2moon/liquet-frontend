import { config as mainnetConfig } from "./mainnet"
import { config as testnetConfig } from "./testnet"

export const getNetworkConfig = () => {
  if (process.env.NEXT_PUBLIC_NETWORK_TYPE === "TESTNET") {
    return testnetConfig
  } else {
    return mainnetConfig
  }
}
