const mapItem = (item) => ({
  id: `${item.type}:${item.meta}`,
  name: item.name,
  lowercasedName: item.name.toLowerCase(),
  meta: item.meta,
  type: item.type
})

module.exports = (fetchedItems) => fetchedItems.map(mapItem)
