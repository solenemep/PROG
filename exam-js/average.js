let tab = [6, 8, 12, 23, 9]
let sum = 0

const average = (tab) => {
  for (const elem of tab) {
    sum += elem
  } console.log(sum)
  return sum / tab.length
}

console.log(average(tab))