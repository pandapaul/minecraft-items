const fetchItems = require('./fetchItems')
const mapFetchedItems = require('./mapFetchedItems')
const objectifyMappedItems = require('./objectifyMappedItems')

module.exports = fetchItems()
.then(mapFetchedItems)
.then(objectifyMappedItems)
