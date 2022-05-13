import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Big from "big.js"
import { AmmName, Position } from "common/types"
import { supportedAmms } from "protocol"

const initialState: { [key in AmmName]?: Position } = {}
supportedAmms.map((ammName) => {
  initialState[ammName] = {
    asset: ammName,
    side: "long",
    size: Big(0),
    leverage: Big(0),
    entryPrice: Big(0),
    liquidationPrice: Big(0),
    margin: Big(0),
    marginRatio: Big(0),
    pnl: Big(0)
  }
})

export const slice = createSlice({
  name: "PositionState",
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<{ asset: AmmName; position: Position }>) => {
      state[action.payload.asset] = action.payload.position
    }
  }
})

export const PositionStateActions = slice.actions
export default slice.reducer
