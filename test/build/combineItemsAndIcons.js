const combineItemsAndIcons = require('../../build/combineItemsAndIcons')
const tap = require('tap')

const someMappedItems = [
  {
    id: '7:7',
    type: 7,
    meta: 7,
    name: 'Leaping Boots'
  },
  {
    id: '10000:0',
    type: 10000,
    meta: 0,
    name: 'Lu Shang\'s Fishing Rod'
  }
]

const someIcons = {
  '7:7': 'base64-encoded-leaping-boots',
  '10000:0': 'base64-encoded-lu-shangs-rod'
}

tap.test('combineItemsAndIcons should merge icons into mapped items', t => {
  const items = combineItemsAndIcons([someMappedItems, someIcons])
  t.equal(items.length, someMappedItems.length)
  t.equal(items[0].id, someMappedItems[0].id, 'maintain id property')
  t.equal(items[0].type, someMappedItems[0].type, 'maintain type property')
  t.equal(items[0].meta, someMappedItems[0].meta, 'maintain meta property')
  t.equal(items[0].name, someMappedItems[0].name, 'maintain name property')
  t.equal(items[0].icon, someIcons[items[0].id], 'add icon property')
  t.end()
})
