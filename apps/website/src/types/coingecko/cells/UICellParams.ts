import MobileSortingCellParams from './MobileSortingCellParams'

type UICellParams = {
  lastUpdatedItemParams: {
    label: string
    width: string
    mobile?: MobileSortingCellParams
  }
  historicItemParams: {
    label: string
    width: string
    mobile?: MobileSortingCellParams
  }
}

export default UICellParams
