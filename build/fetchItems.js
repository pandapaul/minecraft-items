const superagent = require('superagent')

module.exports = () => superagent.get('http://minecraft-ids.grahamedgecombe.com/items.json')
  .then(res => JSON.parse(res.text))
