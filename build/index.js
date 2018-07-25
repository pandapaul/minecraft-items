const fetchItems = require('./fetchItems')
const fetchIcons = require('./fetchIcons')
const combineItemsAndIcons = require('./combineItemsAndIcons')
const mapFetchedItems = require('./mapFetchedItems')
const objectifyMappedItems = require('./objectifyMappedItems')
const writeJsonFiles = require('./writeJsonFiles')
const path = require('path')

module.exports = Promise.all([
  fetchItems(),
  fetchIcons()
])
  .then(([items, icons]) => [mapFetchedItems(items), icons])
  .then(combineItemsAndIcons)
  .then(objectifyMappedItems)
  .then(items => writeJsonFiles(items, path.join(__dirname, '../data')))
