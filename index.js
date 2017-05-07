const itemsById = require('./data/itemsById.json')

const get = (key) => {
  return itemsById[key]
}

module.exports = {
  get
}
