const { readFileSync } = require('fs')

module.exports = function parseInput (fileName) {
  return readFileSync(
    `../inputs/${fileName}.txt`,
    { encoding: 'UTF8' }
  ).split('\n')
}
