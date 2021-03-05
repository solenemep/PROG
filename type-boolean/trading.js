// Variable du prix BTC
let BTC = 40000

if (BTC <= 0) {
  console.log('Do not buy')
} else if (BTC <= 200000) {
  console.log('You should buy')
} else {
  console.log('You should sell')
}