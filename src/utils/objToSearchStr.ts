type IObjType = Record<string, string | number>

const objToSearchStr = (obj: IObjType) => {
  const strPairs: string[] = []

  // Object.entries(obj).forEach(keyValue => {
  //   const [key, value] = keyValue
  //   const pair = key + "=" + String(value)
  //   strPairs.push(pair)
  // }, [])
  const { entries } = Object
  for(let [key , value] of entries(obj)) {
      const pair = key + "=" + String(value)
      strPairs.push(pair)
  }

  return strPairs.join("&")
}

export default objToSearchStr