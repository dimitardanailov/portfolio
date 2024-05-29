import {useState} from 'react'

function usePriceListNotifacationHook() {
  const [priceNotificationIsVisible, setPriceListNotifacationIsVisible] =
    useState(false)
}

export default usePriceListNotifacationHook
