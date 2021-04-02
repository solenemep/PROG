const isMagicSquare = (square) => {

  let dim = square.length
  let sumL = []
  let sumC = []
  let sumD = []

  let sumLik = 0
  let sumCkj = 0
  let sumDij = 0

  for (k = 0; k < dim; k++) {
    for (i = 0; i < dim; i++) {
      sumLik += square[i][k]
    }
    sumL.push(sumLik)
    for (j = 0; j < dim; j++) {
      sumCkj += square[k][j]
    }
    sumC.push(sumCkj)
  }

  for (i = 1; i < dim; i++) {
    if (sumL[i] === sumL[i - 1] &&
      sumC[i] === sumC[i - 1] &&
      sumD[i] === sumD[i - 1] &&
      sumL[i] === sumC[i] === sumD[i]) {
      return true
    } else {
      return false
    }
  }
}

let square = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
]
console.log(isMagicSquare(square))