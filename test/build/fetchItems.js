const fetchItems = require('../../build/fetchItems')
const tap = require('tap')

tap.test('fetchItems should fetch an array of items', t => {
  return fetchItems()
  .then(items => {
    t.type(items, Array)
  })
})
