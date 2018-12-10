const {
  countBy, incrementKey, isEqual, isTrue
} = require('./utils')


function aoc2a (input) {
  return input.reduce(reduceLetterCounts, [0, 0])
    .reduce((twos, threes) => twos * threes)
}

function aoc2b (input) {
  while (a = input.shift()) {
    for (b of input) {
      commonChars = stringAND(a, b)

      if (commonChars.length === a.length - 1)
        return commonChars
    }
  }
}

const reduceLetterCounts = (result, str) => {
  let hasTwos, hasThrees

  for (const count of getLetterCounts(str)) {
    if (shouldIncTwos(hasTwos, count))
      hasTwos = incTwos(result)
    else if (shouldIncThrees(hasThrees, count))
      hasThrees = incThrees(result)

    if (hasTwos && hasThrees) break
  }

  return result
}

const getLetterCounts = str => Object.values(countBy(str))

const shouldIncTwos = (hasTwos, count) => !hasTwos && isTwo(count)
const shouldIncThrees = (hasThrees, count) => !hasThrees && isThree(count)

const isTwo = num => isEqual(num, 2)
const isThree = num => isEqual(num, 3)

const incTwos = result => incrementKey(result, 0)
const incThrees = result => incrementKey(result, 1)

const stringAND = (a, b) =>
  a.split('')
    .filter((char, idx) => char === b[idx])
    .join('')


const input = require('./parseInput')('d2')

console.log({
  aoc2a: aoc2a(input),
  aoc2b: aoc2b(input),
})
