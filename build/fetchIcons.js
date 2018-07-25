const superagent = require('superagent')
const binaryParser = require('superagent-binary-parser')
const AdmZip = require('adm-zip')

const pathToId = (path) => {
  const matched = path.match(/^(\d+)-(\d+)\.png$/)
  return `${matched[1]}:${matched[2]}`
}

module.exports = () => {
  const icons = {}

  return superagent.get('http://minecraft-ids.grahamedgecombe.com/items.zip')
    .buffer()
    .parse(binaryParser)
    .then(res => res.body)
    .then(buffer => new AdmZip(buffer))
    .then(zip => zip.getEntries())
    .then(entries => entries.forEach(entry => {
      const itemId = pathToId(entry.entryName)
      icons[itemId] = entry.getData().toString('base64')
    }))
    .then(() => icons)
}
