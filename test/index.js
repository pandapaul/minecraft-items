const minecraftItems = require('../')
const tap = require('tap')

const testItem = (test, item, name) => {
  test.type(item, 'object')
  test.equal(item.name, name)
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
