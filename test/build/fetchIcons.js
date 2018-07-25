const fetchIcons = require('../../build/fetchIcons')
const tap = require('tap')

tap.test('fetchIcons should fetch an object of icons keyed by id', t => {
  return fetchIcons()
    .then(icons => {
      t.type(icons, 'object', 'icons should be in an object')
      t.type(typeof icons['2:0'].type, 'string', 'icons should be represented as strings and keyed by id')
    })
})
