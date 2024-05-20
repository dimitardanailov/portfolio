function sanitizeUrl(value: string) {
  const raw = value.split(' ')
  const regExp = new RegExp(/[\,\-\W]/g)
  const words = raw
    .map((word: string) => {
      return word.trim().replace(regExp, '').toLocaleLowerCase()
    })
    .filter(word => {
      const isValidWord = word.length > 0 && word !== '-'

      return isValidWord
    })

  const output = words.join('-')
  console.log('words', output)

  return output
}

export default sanitizeUrl
