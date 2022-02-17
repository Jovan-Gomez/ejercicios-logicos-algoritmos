const primeNaive = (n) => {
  if (n < 2 || n === 4) return false

  const square = Math.floor(Math.sqrt(n))
  if (square === 1) return true

  let divisor = 0
  for (let i = 2; i < square; i++) {
    if (n % i === 0) {
      divisor++
    }
  }

  return divisor === 0 ? true : false
}

// console.log(primeNaive(4))
// console.log(primeNaive(5))
