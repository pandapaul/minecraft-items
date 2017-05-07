const fs = require('fs-extra')
const path = require('path')

module.exports = (items, directory) => {
  directory = directory || __dirname
  return Promise.all([
    fs.outputJson(path.join(directory, 'itemsById.json'), items.byId),
    fs.outputJson(path.join(directory, 'itemsByName.json'), items.byName)
  ])
}
