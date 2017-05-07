const mapFetchedItems = require('../../build/mapFetchedItems')
const tap = require('tap')

const someItems = [
  {
    type: 101,
    meta: 2,
    name: 'Hoo Mjuu',
    text_type: 'hoo_mjuu'
  },
  {
    type: 77,
    meta: 7,
    name: 'Leaping Lizzy',
    text_type: 'leaping_lizzy'
  }
]

tap.test('mapFetchedItems should map fetched items', t => {
  const mappedItems = mapFetchedItems(someItems)
  t.equal(mappedItems.length, someItems.length)
  t.type(mappedItems[0].type, 'undefined', 'drop type property')
  t.type(mappedItems[0].text_type, 'undefined', 'drop text_type property')
  t.equal(mappedItems[0].id, someItems[0].type, 'map type to id')
  t.end()
})
