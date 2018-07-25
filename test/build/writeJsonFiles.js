const writeJsonFiles = require('../../build/writeJsonFiles')
const tap = require('tap')
const fs = require('fs-extra')
const path = require('path')

const someObjectifiedItems = {
  byId: {
    17: {
      id: 17,
      meta: 7,
      name: 'Bard'
    },
    35: {
      id: 35,
      meta: 2,
      name: 'Scholar'
    }
  },
  byName: {
    Bard: {
      id: 17,
      meta: 7,
      name: 'Bard'
    },
    Scholar: {
      id: 35,
      meta: 2,
      name: 'Scholar'
    }
  }
}

tap.test('writeJsonFiles should create two json files where one contains the items by id and the other by name', t => {
  return writeJsonFiles(someObjectifiedItems, path.join(__dirname, 'data'))
    .then(() => fs.readJson(path.join(__dirname, 'data/itemsById.json')))
    .then(writtenById => {
      t.same(writtenById, someObjectifiedItems.byId)
    })
    .then(() => fs.readJson(path.join(__dirname, 'data/itemsByName.json')))
    .then(writtenByName => {
      t.same(writtenByName, someObjectifiedItems.byName)
    })
})
