const numberPyramid = (base) => {
  let str = ''
  for (i = 1; i <= base; ++i) {
    str += i.toString().repeat(i)
    if (i !== base) {
      str += '\n'
    }
  }
  return str
}

console.log(numberPyramid(13))