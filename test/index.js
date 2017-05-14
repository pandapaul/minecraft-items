const minecraftItems = require('../')
const tap = require('tap')

const testItem = (test, item, name) => {
  test.type(item, 'object')
  test.equal(item.name, name)
  test.notEqual(typeof item.id, 'undefined', 'items should have an id property')
  test.notEqual(typeof item.type, 'undefined', 'items should have a type property')
  test.notEqual(typeof item.meta, 'undefined', 'items should have a meta property')
  test.notEqual(typeof item.icon, 'undefined', 'items should have a icon property')
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
