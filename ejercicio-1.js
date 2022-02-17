function primeNaive(num) {
  if (num < 2 || num === 4) return false
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}

module.exports = { primeNaive }

// console.log(primeNaive(4))
// console.log(primeNaive(5))
