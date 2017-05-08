const itemsById = require('./data/itemsById.json')
const itemsByName = require('./data/itemsByName.json')

const get = (key) => {
  if (typeof key === 'number' || /^\d+$/.test(key)) {
    key = `${key}:0`
    return itemsById[key]
  }

  if (/^\d+:\d+$/.test(key)) {
    return itemsById[key]
  }

  return itemsByName[key]
}

module.exports = {
  get
}
