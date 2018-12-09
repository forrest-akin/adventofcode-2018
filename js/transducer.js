const {
  identity, isArray, isObject, isString
} = require('./utils')

const IS_REDUCED = '@@transuder/reduced'

function filter (predicate) {
  return step =>
    (result = step(), x) => predicate(x) ? step(result, x) : result
}

function map (f) {
  return step =>
    (result = step(), x) => step(result, f(x))
}

function reduce (xf, init, array) {
  let result = init

  for (let x of array) {
    result = xf(result, x)
    if (isReduced(result)) break
  }

  return result
}

function reduced (result) {
  result[IS_REDUCED] = true
  return result
}

function isReduced (result) {
  return result ? result[IS_REDUCED] : false
}

function transduce () {

}

function into (xf, target, source) {
  return transduce(xf, getStep(target), target, source)
}

function getStep (target) {
  if (isString(target)) {
    return stringAppend
  } else if (isArray(target)) {
      return arrayPush
  } else if (isObject(target)) {
      return addEntry
  }

  return identity
}

function stringAppend (string, x) {
  return string + x
}

function arrayPush (arr, x) {
  arr.push(x)
  return arr
}

function addEntry (obj, key, val) {
  obj[key] = val
  return obj
}

module.exports = {
  filter,
  isReduced,
  map,
  reduce,
  reduced,
  transduce,
}
