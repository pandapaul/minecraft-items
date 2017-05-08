const objectify = require('objectify-array')

module.exports = (mappedItems) => {
  const byId = objectify(mappedItems, 'id')

  mappedItems.forEach(item => {
    item.lowercasedName = item.name.toLowerCase()
  })
  const byName = objectify(mappedItems, 'lowercasedName')
  Object.keys(byName).forEach(name => {
    delete byName[name].lowercasedName
  })
  return { byId, byName }
}
