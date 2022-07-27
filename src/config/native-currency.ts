/* eslint-disable simple-import-sort/imports */
import { NATIVE as NATIVE_ORIGINAL, NativeMap } from '@sushiswap/core-sdk'
import { ChainId } from 'app/config/networks'

export const NATIVE: NativeMap = {
  ...NATIVE_ORIGINAL,
  [ChainId.JFIN_TESTNET]: /* new JFIN_TESTNET(3502) */{
    chainId: 3502,
    decimals: 18,
    isNative: true,
    isToken: false,
    name: "JFIN Coin",
    symbol: "JFIN",
    wrapped: {
      address: "0x474d6eA19D04597405b64BCb92154ffd90993E66",
      chainId: 3502,
      decimals: 18,
      isNative: false,
      isToken: true,
      name: "JFIN Coin",
      symbol: "JFIN",
    }
  }
}
