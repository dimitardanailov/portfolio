const randomID = () => {
  const r = (Math.random() + 1).toString(36).substring(2)

  return r
}

export default randomID
