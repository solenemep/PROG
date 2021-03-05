var numArray = [89, 2, 0, 600, 140000, 104, 99]

// Insertion sort ascending
for (var i = 0; i < numArray.length; i++) {
  var target = numArray[i]
  for (var j = i - 1; j >= 0 && (numArray[j] > target); j--) {
    numArray[j + 1] = numArray[j]
  }
  numArray[j + 1] = target
}
console.log(numArray)

// Insertion sort descending
for (var i = 0; i < numArray.length; i++) {
  var target = numArray[i]
  for (var j = i - 1; j >= 0 && (numArray[j] < target); j--) {
    numArray[j + 1] = numArray[j]
  }
  numArray[j + 1] = target
}
console.log(numArray)

// Selecion sort ascending
for (var i = 0; i < numArray.length - 1; i++) {
  var min = i
  for (var j = i + 1; j < numArray.length; j++) {
    if (numArray[j] < numArray[min]) {
      min = j
    }
  }
  if (min != i) {
    var target = numArray[i]
    numArray[i] = numArray[min]
    numArray[min] = target
  }
}
console.log(numArray);

// Selection sort descending
for (var i = 0; i < numArray.length - 1; i++) {
  var min = i
  for (var j = i + 1; j < numArray.length; j++) {
    if (numArray[j] > numArray[min]) {
      min = j
    }
  }
  if (min != i) {
    var target = numArray[i]
    numArray[i] = numArray[min]
    numArray[min] = target
  }
}
console.log(numArray)