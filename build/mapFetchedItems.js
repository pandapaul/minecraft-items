const mapItem = (item) => ({
  id: item.type,
  name: item.name,
  meta: item.meta
})

module.exports = (fetchedItems) => fetchedItems.map(mapItem)
