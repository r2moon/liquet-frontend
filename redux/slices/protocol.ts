import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import protocol, { supportedAmms } from "protocol"
import Big from "big.js"
import { Amm } from "typechain/Amm"
import { getWeb3 } from "utils/web3/web3"
import ammJSON from "../../abis/Amm.json"
import { AmmName, ProtocolData, ProtocolGeneralData, ProtocolVariableData } from "common/types"

const web3 = getWeb3()

const amms: { [key in AmmName]?: Amm } = {}
supportedAmms.map(
  (amm) => (amms[amm] = new web3.eth.Contract(ammJSON as any, protocol.amms[amm]) as unknown as Amm)
)

let defaultAmm: AmmName = "FTM"
if (typeof window !== "undefined") {
  const ammName = localStorage.getItem("amm") as AmmName
  if (ammName && supportedAmms.includes(ammName)) defaultAmm = ammName
}

const initialState: ProtocolData = {
  currentAmm: defaultAmm,
  generalData: {
    tollRatio: Big(0),
    spreadRatio: Big(0),
    maxHolding: Big(0),
    maintenanceMarginRatio: Big(0),
    fundingPeriod: Big(0)
  },
  variableData: {
    markPrice: Big(0),
    indexPrice: Big(0),
    quoteReserve: Big(0),
    baseReserve: Big(0),
    volume: Big(0),
    fundingRate: Big(0)
  }
}

const slice = createSlice({
  name: "ProtocolState",
  initialState,
  reducers: {
    setCurrentAmm: (state, action: PayloadAction<AmmName>) => {
      state.currentAmm = action.payload
    },
    setGeneralData: (state, action: PayloadAction<ProtocolGeneralData>) => {
      state.generalData = action.payload
    },
    setVariableData: (state, action: PayloadAction<ProtocolVariableData>) => {
      state.variableData = action.payload
    }
    // setMarkPrice: (state, action: PayloadAction<Big>) => {
    //   state.markPrice = action.payload
    // },
    // setIndexPrice: (state, action: PayloadAction<Big>) => {
    //   state.indexPrice = action.payload
    // },
    // setFundingRate: (state, action: PayloadAction<Big>) => {
    //   state.fundingRate = action.payload
    // },
    // setSpreadRatio: (state, action: PayloadAction<Big>) => {
    //   state.spreadRatio = action.payload
    // },
    // setMaxHolding: (state, action: PayloadAction<Big>) => {
    //   state.maxHolding = action.payload
    // },
    // setVolume: (state, action: PayloadAction<Big>) => {
    //   state.volume = action.payload
    // },
    // setMaintenanceMarginRatio: (state, action: PayloadAction<Big>) => {
    //   state.maintenanceMarginRatio = action.payload
    // },
    // setQuoteReserve: (state, action: PayloadAction<Big>) => {
    //   state.quoteReserve = action.payload
    // },
    // setBaseReserve: (state, action: PayloadAction<Big>) => {
    //   state.baseReserve = action.payload
    // },
  }
})

export const ProtocolStateActions = slice.actions
export default slice.reducer
