const mapItem = (item) => ({
  id: `${item.type}:${item.meta}`,
  name: item.name,
  meta: item.meta,
  type: item.type
})

module.exports = (fetchedItems) => fetchedItems.map(mapItem)
