function sanitizeUrl(value: string) {
  const raw = value.split(' ')
  const regExp = new RegExp(/\,/g)
  const words = raw.map((word: string) => {
    return word.trim().replace(regExp, '').toLocaleLowerCase()
  })

  return words.join('-')
}

export default sanitizeUrl
