import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import PositionState from "./slices/position"
import ProtocolState from "./slices/protocol"
import WalletState from "./slices/wallet"

export const store = configureStore({
  reducer: { PositionState, ProtocolState, WalletState },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
