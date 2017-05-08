const objectifyMappedItems = require('../../build/objectifyMappedItems')
const tap = require('tap')

const someMappedItems = [
  {
    id: 15,
    meta: 1,
    name: 'Ptolemian'
  },
  {
    id: 203,
    meta: 2,
    name: 'Daishiki'
  }
]

tap.test('objectifyMappedItems should create two sets of objects keyed by id and name', t => {
  const objectified = objectifyMappedItems(someMappedItems)
  t.type(objectified, 'object', 'objectifyMappedItems should return an object')

  t.type(objectified.byId, 'object', 'byId should be an object')
  t.type(objectified.byId[15], 'object', 'byId should contain objects keyed by id')
  t.equal(objectified.byId[15].id, someMappedItems[0].id, 'objects in byId should maintain id')
  t.equal(objectified.byId[15].meta, someMappedItems[0].meta, 'objects in byId should maintain meta')
  t.equal(objectified.byId[15].name, someMappedItems[0].name, 'objects in byId should maintain name')
  t.type(objectified.byId[15].lowercasedName, 'undefined', 'objects in byId should not have lowercasedName')

  t.type(objectified.byName, 'object', 'byName should be an object')
  t.type(objectified.byName.daishiki, 'object', 'byName should contain objects keyed by lowercased names')
  t.equal(objectified.byName.daishiki.id, someMappedItems[1].id, 'objects in byName should maintain id')
  t.equal(objectified.byName.daishiki.meta, someMappedItems[1].meta, 'objects in byName should maintain meta')
  t.equal(objectified.byName.daishiki.name, someMappedItems[1].name, 'objects in byName should maintain name')
  t.type(objectified.byName.daishiki.lowercasedName, 'undefined', 'objects in byName should not have lowercasedName')
  t.end()
})
