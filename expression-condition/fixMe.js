let list = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eve']
for (let i = 0; i < list.length; ++i) {
  list[i] = list[i].toUpperCase()
  switch (list[i]) {
    case 'ALICE':
      console.log('Alice want to exchange with Bob')
      break
    case 'BOB':
      console.log('Bob want to exchange with Alice')
      break
    case 'CHARLIE':
      console.log('Charlie is a generic third participant')
      break
    case 'CRAIG':
      console.log('Craig is a password cracker')
      break
    case 'EVE':
      console.log('Eve is an eavesdropper')
      break
  }
}

/*
Alice want to exchange with Bob
Bob want to exchange with Alice
Charlie is a generic third participant
Craig is a password cracker
Eve is an eavesdropper
*/
