const isLeapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return true
  } else {
    return false
  }
}

let year = 2024
console.log(year + (isLeapYear(year) ? " est une année bisextile" : " n'est pas une année bisextile"))