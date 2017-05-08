const objectify = require('objectify-array')

module.exports = (mappedItems) => {
  const byId = objectify(mappedItems, 'id')
  const byName = objectify(mappedItems, 'lowercasedName')
  return { byId, byName }
}
