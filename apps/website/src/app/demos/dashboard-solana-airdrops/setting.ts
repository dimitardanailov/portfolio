import {UICellParams, UICoinCellParams} from '@/types/coingecko/cells'

export const coinCellParams: UICoinCellParams = {
  label: 'Coin',
  width: '8%',
  mobile: {
    hidden: false,
  },
}

export const usdCellParams: UICellParams = {
  lastUpdatedItemParams: {
    label: 'USD',
    width: '46%',
    mobile: {
      hidden: false,
      width: '46%',
    },
  },
  historicItemParams: {
    label: 'Day ago',
    width: '46%',
    mobile: {
      hidden: false,
      width: '46%',
    },
  },
}
