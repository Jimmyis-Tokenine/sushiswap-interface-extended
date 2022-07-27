import { WNATIVE as WNATIVE_ORIGINAL } from '@sushiswap/core-sdk'
import { ChainId } from 'app/config/networks'

export const WNATIVE: any = {
  ...WNATIVE_ORIGINAL,
  [ChainId.JFIN_TESTNET]: {
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
