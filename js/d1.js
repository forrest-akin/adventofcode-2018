const input = require('./d1-input.js')

function aoc1a (input) {
  return input.reduce((sum, num) => sum + parseInt(num), 0)
}

function aoc1b (input) {
  const LAST_IDX = input.length - 1
  const nextIdx = idx => idx === LAST_IDX ? 0 : idx + 1
  const cache = {}
  let sum = 0
  let idx = 0

  while (!cache[sum]) {
    cache[sum] = true
    sum += parseInt(input[idx])
    idx = nextIdx(idx)
  }
  
  return sum
}

console.log({
  aoc1a: aoc1a(input),
  aoc1b: aoc1b(input),
})
