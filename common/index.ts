export const LEADERBOARD_REFRESH_INTERVAL = 10000 // 10 seconds

export const rpc = "https://rpc.testnet.fantom.network/"
export const rpc_ws = "wss://rpc.testnet.fantom.network/"

export const INPUT_REGEX = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
export const SLIPPAGE_REGEX = /^[1-4]{0,1}[0-9]?$|50$/
export const MARGIN_MGMT_REGEX = /^[1-9]{0,1}[0-9]?$|100$/
