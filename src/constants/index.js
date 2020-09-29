export const FACTORY_ADDRESS = '0xCe8fd65646F2a2a897755A1188C04aCe94D2B8D0'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time'
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://tokens.bscswap.com/tokens.json'
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = []

// pair blacklist
export const PAIR_BLACKLIST = []

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = []
