const fetchItems = require('../../build/fetchItems')
const tap = require('tap')

tap.test('fetchItems should fetch an array of items', t => {
  return fetchItems()
    .then(items => {
      t.type(items, Array, 'items should be in an array')
      t.notEqual(typeof items[0].type, 'undefined', 'item objects should have a type property')
      t.notEqual(typeof items[0].name, 'undefined', 'item objects should have a name property')
      t.notEqual(typeof items[0].meta, 'undefined', 'item objects should have a meta property')
    })
})
