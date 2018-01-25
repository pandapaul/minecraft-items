const minecraftItems = require('../')
const tap = require('tap')
const itemsById = require('../data/itemsById.json')
const itemsByName = require('../data/itemsByName.json')

const testItem = (test, item, name) => {
  test.type(item, 'object')
  test.equal(item.name, name)
  test.notEqual(typeof item.id, 'undefined', 'items should have an id property')
  test.notEqual(typeof item.type, 'undefined', 'items should have a type property')
  test.notEqual(typeof item.meta, 'undefined', 'items should have a meta property')
  test.notEqual(typeof item.icon, 'undefined', 'items should have an icon property')
  test.end()
}

tap.test('should be able to get an item by numeric type', t => {
  testItem(t, minecraftItems.get(1), 'Stone')
})

tap.test('should be able to get an item by string type', t => {
  testItem(t, minecraftItems.get('1'), 'Stone')
})

tap.test('should be able to get an item by string type & subType', t => {
  testItem(t, minecraftItems.get('1:0'), 'Stone')
})

tap.test('should be able to get an item by name', t => {
  testItem(t, minecraftItems.get('Stone'), 'Stone')
})

tap.test('should be able to get an item by name with case insensitivity', t => {
  testItem(t, minecraftItems.get('stoNe'), 'Stone')
})

tap.test('should be able to get all items', t => {
  const allItems = minecraftItems.getAll()
  t.type(allItems, 'object')
  t.equal(allItems, itemsById)
  t.end()
})

tap.test('should be able to get all items keyed by name', t => {
  const allItems = minecraftItems.getAll({ by: 'name' })
  t.type(allItems, 'object')
  t.equal(allItems, itemsByName)
  t.end()
})

tap.test('should be able to get items matching a numeric type', t => {
  const stoneThings = minecraftItems.find(1)
  t.true(Array.isArray(stoneThings))
  t.equal(stoneThings[0].name, 'Stone')
  t.true(stoneThings.length > 1)
  t.end()
})

tap.test('should be able to get items matching an incomplete id', t => {
  const stoneThings = minecraftItems.find('1:')
  t.true(Array.isArray(stoneThings))
  t.equal(stoneThings[0].name, 'Stone')
  t.true(stoneThings.length > 1)
  t.end()
})

tap.test('should be able to get items matching an id', t => {
  const concreteThings = minecraftItems.find('251:1')
  t.true(Array.isArray(concreteThings))
  t.equal(concreteThings[0].name, 'Orange Concrete')
  t.true(concreteThings.length > 1)
  t.end()
})

tap.test('should be able to get items matching a string', t => {
  const stoneThings = minecraftItems.find('stone')
  t.true(Array.isArray(stoneThings))
  t.equal(stoneThings[0].name, 'Stone')
  t.true(stoneThings.length > 1)
  t.end()
})
