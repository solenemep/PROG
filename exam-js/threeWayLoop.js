let tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

// For
for (i = 0; i < tab.length; i++) {
  console.log(tab[i] + ", length : " + tab[i].length)
}

// For Of
for (const elem of tab) {
  console.log(elem + ", length : " + elem.length)
}

// For Each
tab.forEach((elem) => {
  console.log(elem + ", length : " + elem.length)
})