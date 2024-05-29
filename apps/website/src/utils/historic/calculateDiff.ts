const calculateHistoricDiff = (currentPrice: number, percent: number) => {
  let indexChange = Math.abs(percent) / 100
  const dif = currentPrice * indexChange
  const sign = Math.sign(percent) * -1

  return currentPrice + sign * dif
}

export default calculateHistoricDiff
