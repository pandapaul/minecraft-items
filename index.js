const itemsById = require('./data/itemsById.json')
const itemsByName = require('./data/itemsByName.json')

const format = {
  num: /^\d+$/,
  incompleteId: /^\d+:$/,
  id: /^\d+:\d+$/
}
const isNumeric = key => typeof key === 'number' || format.num.test(key)
const isIncompleteId = key => format.incompleteId.test(key)
const isId = key => format.id.test(key)

const get = (key) => {
  if (isNumeric(key)) {
    key = `${key}:0`
    return itemsById[key]
  }

  if (isId(key)) {
    return itemsById[key]
  }

  return itemsByName[key.toLowerCase()]
}

const getAll = ({ by = 'id' } = {}) => {
  if (by === 'name') {
    return itemsByName
  }
  return itemsById
}

const filterAndMapKeysById = (key, keyFormat) => {
  const keys = Object.keys(itemsById).filter(k => keyFormat.test(k))
  return keys.map(key => itemsById[key])
}

const findByNumber = (key) => {
  const keyFormat = new RegExp(`^${key}:`)
  return filterAndMapKeysById(key, keyFormat)
}

const findById = (key) => {
  const keyFormat = new RegExp(`^${key}`)
  return filterAndMapKeysById(key, keyFormat)
}

const findByName = (key) => {
  const keyFormat = new RegExp(`${key}`)
  const keys = Object.keys(itemsByName).filter(k => keyFormat.test(k))
  return keys.map(key => itemsByName[key])
}

const find = (key) => {
  if (isNumeric(key)) {
    return findByNumber(key)
  }

  if (isIncompleteId(key) || isId(key)) {
    return findById(key)
  }

  return findByName(key)
}

module.exports = {
  get,
  getAll,
  find
}
