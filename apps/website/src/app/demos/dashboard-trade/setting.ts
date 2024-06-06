import UICellParams from '@/types/coingecko/cells/UICellParams'

export const usdCellParams: UICellParams = {
  lastUpdatedItemParams: {
    label: 'USD',
    width: '12.5%',
    mobile: {
      hidden: false,
      width: '30%',
    },
  },
  historicItemParams: {
    label: 'Day ago',
    width: '20%',
    mobile: {
      hidden: false,
      width: '62%',
    },
  },
}

export const btcCellParams: UICellParams = {
  lastUpdatedItemParams: {
    label: 'BTC',
    width: '10.5%',
    mobile: {
      hidden: true,
    },
  },
  historicItemParams: {
    label: 'Day ago',
    width: '19.25%',
    mobile: {
      hidden: true,
    },
  },
}

export const ethCellParams: UICellParams = {
  lastUpdatedItemParams: {
    label: 'ETH',
    width: '10.5%',
    mobile: {
      hidden: true,
    },
  },
  historicItemParams: {
    label: 'Day ago',
    width: '19.25%',
    mobile: {
      hidden: true,
    },
  },
}

export const dimensions = {
  coin: {
    width: '8%',
    mobile: {
      hidden: false,
    },
  },
}
