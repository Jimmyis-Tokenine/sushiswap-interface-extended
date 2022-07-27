import { AddressMap } from '@sushiswap/core-sdk'
import {
  BALANCE_FETCHER_ADDRESS as BALANCE_FETCHER_ADDRESS_ORIGINAL,
  BAR_ADDRESS as BAR_ADDRESS_ORIGINAL,
  BENTOBOX_ADDRESS as BENTOBOX_ADDRESS_ORIGINAL,
  BORING_HELPER_ADDRESS as BORING_HELPER_ADDRESS_ORIGINAL,
  CHAINLINK_ORACLE_ADDRESS as CHAINLINK_ORACLE_ADDRESS_ORIGINAL,
  DAI_ADDRESS as DAI_ADDRESS_ORIGINAL,
  ENS_REGISTRAR_ADDRESS as ENS_REGISTRAR_ADDRESS_ORIGINAL,
  FACTORY_ADDRESS as FACTORY_ADDRESS_ORIGINAL,
  FRAX_ADDRESS as FRAX_ADDRESS_ORIGINAL,
  KASHI_ADDRESS as KASHI_ADDRESS_ORIGINAL,
  MAKER_ADDRESS as MAKER_ADDRESS_ORIGINAL,
  MASTERCHEF_ADDRESS as MASTERCHEF_ADDRESS_ORIGINAL,
  MASTERCHEF_V2_ADDRESS as MASTERCHEF_V2_ADDRESS_ORIGINAL,
  MERKLE_DISTRIBUTOR_ADDRESS as MERKLE_DISTRIBUTOR_ADDRESS_ORIGINAL,
  MIM_ADDRESS as MIM_ADDRESS_ORIGINAL,
  MINICHEF_ADDRESS as MINICHEF_ADDRESS_ORIGINAL,
  MULTICALL2_ADDRESS as MULTICALL2_ADDRESS_ORIGINAL,
  MULTISIG_ADDRESS as MULTISIG_ADDRESS_ORIGINAL,
  ROUTER_ADDRESS as ROUTER_ADDRESS_ORIGINAL,
  SUSHI_ADDRESS as SUSHI_ADDRESS_ORIGINAL,
  SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS as SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS_ORIGINAL,
  SUSHISWAP_MULTISWAPPER_ADDRESS as SUSHISWAP_MULTISWAPPER_ADDRESS_ORIGINAL,
  SUSHISWAP_SWAPPER_ADDRESS as SUSHISWAP_SWAPPER_ADDRESS_ORIGINAL,
  TIMELOCK_ADDRESS as TIMELOCK_ADDRESS_ORIGINAL,
  USD_ADDRESS as USD_ADDRESS_ORIGINAL,
  USDC_ADDRESS as USDC_ADDRESS_ORIGINAL,
  USDT_ADDRESS as USDT_ADDRESS_ORIGINAL,
  WETH9_ADDRESS as WETH9_ADDRESS_ORIGINAL,
  WNATIVE_ADDRESS as WNATIVE_ADDRESS_ORIGINAL,
  ZAPPER_ADDRESS as ZAPPER_ADDRESS_ORIGINAL,
} from '@sushiswap/core-sdk'
import { ChainId } from 'config/networks'

export const SUSHI_ADDRESS: AddressMap = {
  ...SUSHI_ADDRESS_ORIGINAL,
  [ChainId.JFIN_TESTNET] : '0xeed817CA68016F07fEd2Ae8bbd34ea2C6970C3A8',
}

export const USDC_ADDRESS: AddressMap = {
  ...USDC_ADDRESS_ORIGINAL,
  [ChainId.JFIN_TESTNET]: '0x1003b56F9AC197A780037FA54c287144067bB43D',
}

export const USD_ADDRESS: AddressMap = {
  ...USD_ADDRESS_ORIGINAL,
  [ChainId.JFIN_TESTNET]: '0x1003b56F9AC197A780037FA54c287144067bB43D',
}

export const WETH9_ADDRESS: AddressMap = {
  ...WETH9_ADDRESS_ORIGINAL,
  [ChainId.JFIN_TESTNET]: '0x474d6eA19D04597405b64BCb92154ffd90993E66',
}

export const WNATIVE_ADDRESS: AddressMap = {
  ...WNATIVE_ADDRESS_ORIGINAL,
  [ChainId.JFIN_TESTNET]: '0x474d6eA19D04597405b64BCb92154ffd90993E66',
}

export const DAI_ADDRESS: AddressMap = {
  ...DAI_ADDRESS_ORIGINAL,
}

export const USDT_ADDRESS: AddressMap = {
  ...USDT_ADDRESS_ORIGINAL,
}

export const MIM_ADDRESS: AddressMap = {
  ...MIM_ADDRESS_ORIGINAL,
}

export const FRAX_ADDRESS: AddressMap = {
  ...FRAX_ADDRESS_ORIGINAL,
}

export const FACTORY_ADDRESS: AddressMap = {
  ...FACTORY_ADDRESS_ORIGINAL,
  [ChainId.JFIN_TESTNET]: '0xc526ADA085b30bB88D6ddAF1BDbca30F3ed5bEDc',
}

export const ROUTER_ADDRESS: AddressMap = {
  ...ROUTER_ADDRESS_ORIGINAL,
  [ChainId.JFIN_TESTNET]: '0xCC8AfE6E2812F5135515d3E07eFA5112Bf0EB185',
}

export const MASTERCHEF_ADDRESS: AddressMap = {
  ...MASTERCHEF_ADDRESS_ORIGINAL,
  [ChainId.JFIN_TESTNET]: '0x15b8379AF7454481Cc5Cb8B7a25948E25ba61797',
}


export const BAR_ADDRESS: AddressMap = {
  ...BAR_ADDRESS_ORIGINAL,
  [ChainId.JFIN_TESTNET]: '0x1a50D07d990Db8877E8e1ca22F13D1bCeF7903d5',
}

export const MAKER_ADDRESS: AddressMap = {
  ...MAKER_ADDRESS_ORIGINAL,
  [ChainId.JFIN_TESTNET]: '0xc83379d05eCeb3F0A348b802CaCFC6c4c2f6C4A9',
}

export const TIMELOCK_ADDRESS: AddressMap = {
  ...TIMELOCK_ADDRESS_ORIGINAL,
}

export const BENTOBOX_ADDRESS: AddressMap = {
  ...BENTOBOX_ADDRESS_ORIGINAL,
  [ChainId.JFIN_TESTNET]: '0xcc229aAbf05dBe6b0e4C862c25308322e89F9a6A',
}

export const KASHI_ADDRESS: AddressMap = {
  ...KASHI_ADDRESS_ORIGINAL,
}

export const SUSHISWAP_SWAPPER_ADDRESS: AddressMap = {
 ...SUSHISWAP_SWAPPER_ADDRESS_ORIGINAL,
}

export const SUSHISWAP_MULTISWAPPER_ADDRESS: AddressMap = {
  ...SUSHISWAP_MULTISWAPPER_ADDRESS_ORIGINAL,
}

export const SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS: AddressMap = {
  ...SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS_ORIGINAL,
}

export const PEGGED_ORACLE_ADDRESS = '0x6cbfbB38498Df0E1e7A4506593cDB02db9001564'

export const SUSHISWAP_TWAP_0_ORACLE_ADDRESS = '0x66F03B0d30838A3fee971928627ea6F59B236065'

export const SUSHISWAP_TWAP_1_ORACLE_ADDRESS = '0x0D51b575591F8f74a2763Ade75D3CDCf6789266f'

export const CHAINLINK_ORACLE_ADDRESS: AddressMap = {
  ...CHAINLINK_ORACLE_ADDRESS_ORIGINAL,
}

export const BORING_HELPER_ADDRESS: AddressMap = {
  ...BORING_HELPER_ADDRESS_ORIGINAL,
}

export const MINICHEF_ADDRESS: AddressMap = {
  ...MINICHEF_ADDRESS_ORIGINAL,
  [ChainId.JFIN_TESTNET]: '0xa33a4CE834A825Ee8c0f0dA9370F518aB890Fb1f',
}

export const MASTERCHEF_V2_ADDRESS: AddressMap = {
  ...MASTERCHEF_V2_ADDRESS_ORIGINAL,
}

export const ENS_REGISTRAR_ADDRESS: AddressMap = {
  ...ENS_REGISTRAR_ADDRESS_ORIGINAL,
}

export const ZAPPER_ADDRESS: AddressMap = {
  ...ZAPPER_ADDRESS_ORIGINAL,
}

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  ...MERKLE_DISTRIBUTOR_ADDRESS_ORIGINAL,
}

export const MULTICALL2_ADDRESS: AddressMap = {
  ...MULTICALL2_ADDRESS_ORIGINAL,
  [ChainId.JFIN_TESTNET]: '0xeb3273fcfabc607fa504ac5a6d77b78908c9244e',
}

export const BALANCE_FETCHER_ADDRESS: AddressMap = {
  ...BALANCE_FETCHER_ADDRESS_ORIGINAL,
}

export const MULTISIG_ADDRESS: AddressMap = {
  ...MULTISIG_ADDRESS_ORIGINAL,
}
