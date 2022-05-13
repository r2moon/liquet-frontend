import { AmmName } from "common/types"

// declare amms in this array first
export const supportedAmms = ["FTM"] as const

const protocol: Protocol = {
  usdc: process.env.NEXT_PUBLIC_CONTRACT_USDC!,
  insuranceFund: process.env.NEXT_PUBLIC_CONTRACT_INSURANCEFUND!,
  clearingHouse: process.env.NEXT_PUBLIC_CONTRACT_CLEARINGHOUSE!,
  clearingHouseViewer: process.env.NEXT_PUBLIC_CONTRACT_CLEARINGHOUSEVIEWER!,
  amms: {
    FTM: process.env.NEXT_PUBLIC_CONTRACT_FTMAMM!
  }
}

export default protocol

interface Protocol {
  usdc: string
  insuranceFund: string
  clearingHouse: string
  clearingHouseViewer: string
  amms: {
    [key in AmmName]: string
  }
}
