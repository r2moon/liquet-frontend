import BN from "big.js"
import { BigNumber, BigNumberish } from "ethers"

/**
 * Most contract calls to the protocol return a Decimal struct which in javascript is a tuple of one element(d)
 */
export type Decimal = {
  d: BigNumberish
}

/**
 * Math library for BN number math
 * as returned values from contract calls are mostly BN numbers
 * @author Matrixswap
 */

/**
 * From wei
 */
export function fromWei(val: BigNumberish | BN, decimals = 18): BN {
  return BN(val.toString()).div(Math.pow(10, decimals))
}

/**
 * To Wei
 */
export function toWei(val: number | string | BN, decimals = 18): BN {
  return BN(val).times(Math.pow(10, decimals))
}

export function decimalFromWei(decimal: Decimal): BN {
  return fromWei(decimal.d)
}

export function decimalToWei(val: number | string | BN): [BN] {
  return [toWei(val)]
}

export function fromWeiStr(val: number | string | BN, decimals = 18, precision = 2): string {
  return fromWei(val, decimals).toFixed(precision, 0)
}

export function toWeiStr(val: number | string | BN): string {
  return toWei(val).toFixed(0, 0)
}

export function decimalToWeiStr(val: number | string | BN): [string] {
  return [toWeiStr(val)]
}

export function toWeiDecimal(val: number | string | BN): Decimal {
  return {
    d: toWeiStr(val)
  }
}

/**
 * Convert BN to display string, upto 2 decimals default
 */
export function format(val: number | string | BN, precision = 2): string {
  return BN(val).toFixed(precision, 0)
}

export function formatToFloat(val: number | string | BN, precision = 2): number {
  return parseFloat(format(val, precision))
}

/**
 *Shortens an address
 */
export const shortAddr = (address: string) => {
  return `${address.slice(0, 4)}...${address.slice(-5)}`
}

export const truncate = (amount: string, precision = 8) => {
  const dotIndex = amount.indexOf(".")
  if (dotIndex >= 0) {
    amount = amount.slice(0, dotIndex + precision)
  }
  return amount
}
