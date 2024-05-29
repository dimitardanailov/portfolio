function pricePercentFormat(price: number) {
  const percent = price.toFixed(2)

  return `${percent} %`
}

export default pricePercentFormat
