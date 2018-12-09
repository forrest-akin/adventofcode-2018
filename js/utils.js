function compose (entry, ...fns) {
  return (...args) => fns.reduceRight((x, f) => f(x), entry(...args))
}

function countBy (collection, keyBy = identity) {
  const result = {}
  
  for (const item of collection) {
    const key = keyBy(item)
    if (!result[key]) result[key] = 0
    result[key]++
  }

  return result
}

function get (collection, path = '') {
  let result = collection

  for (const key of path.split('.')) {
    if (result === undefined) break
    result = result[key]
  }

  return result
}

function identity (x) {
  return x
}

function incrementKey (obj, key) {
  if (obj[key] === undefined) {
    obj[key] = 1
  } else if (isNumber(obj[key])) {
    obj[key]++
  }

  return obj[key]
}

function isArray (x) {
  return Array.isArray(x)
}

function isEqual (a, b) {
  return a === b
}

function isNumber (x) {
  return typeof x === "number"
}

function isObject (x) {
  return typeof x === "object"
}

function isString (x) {
  return typeof x === "string"
}

function isTrue (x) {
  return x === true
}

function not (predicate) {
  return (...args) => !predicate(...args)
}

module.exports = {
  compose,
  countBy,
  get,
  identity,
  incrementKey,
  isArray,
  isEqual,
  isObject,
  isString,
  isTrue,
  not,
}
