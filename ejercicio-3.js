const { primeNaive } = require('./ejercicio-1')

function primeList(max) {
  const result = []
  const flags = new Array(max + 1).fill(true)
  for (let i = 2; i < max; i++) {
    if (flags[i] && primeNaive(i)) {
      result.push(i)
    }
  }
  return result
}

console.log(primeList(80))
