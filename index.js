const itemsById = require('./data/itemsById.json')

const get = (key) => {
  if (typeof key === 'number' || /^\d+$/.test(key)) {
    key = `${key}:0`
  }
  return itemsById[key]
}

module.exports = {
  get
}
