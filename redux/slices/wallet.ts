import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Big from "big.js"
import { Signer } from "ethers"
import { BalancesRequest, Wallet } from "common/types"

const initialState: Wallet = {
  account: "",
  balance: Big(0),
  usdcBalance: Big(0),
  chainId: Number(process.env.NEXT_PUBLIC_NETWORK_ID),
  signer: undefined
}

const slice = createSlice({
  name: "WalletState",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string>) => {
      state.account = action.payload
    },
    setBalances: (state, action: PayloadAction<BalancesRequest>) => {
      if (action.payload.balance) {
        state.balance = action.payload.balance
      }

      if (action.payload.usdcBalance) {
        state.usdcBalance = action.payload.usdcBalance
      }
    },
    setChainId: (state, action: PayloadAction<number>) => {
      state.chainId = action.payload
    },
    setSigner: (state, action: PayloadAction<Signer>) => {
      state.signer = action.payload
    }
  }
})

export const WalletStateActions = slice.actions
export default slice.reducer
