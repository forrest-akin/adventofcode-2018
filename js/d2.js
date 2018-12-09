const {
  countBy, incrementKey, isEqual, isTrue
} = require('./utils')

function aoc2a (input) {
  const {
    twos, threes
  } = input.reduce(reduceLetterCounts, { twos: 0, threes: 0 })

  return twos * threes
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

const incTwos = result => incrementKey(result, 'twos')
const incThrees = result => incrementKey(result, 'threes')

const input = require('./parseInput')('d2')

console.log({ aoc2a: aoc2a(input) })
