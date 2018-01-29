const test = require('ava')
const browserslist = require('browserslist')
const fixtures = require('./fixtures')
const print = require('./helpers/print')

fixtures.map(f => ({ ...f, name: `/${f.name}` }))
.forEach(({ name, list }) => {
  test(name, t => {
    const actual = browserslist(list)
    t.is(Array.isArray(actual), true)
    t.is(actual.length > 0, true)
    t.is(actual.every(b => typeof b === 'string'), true)
  })
})

test.after(() => {
  fixtures.forEach(({ name, list }) => print(name, list))
})
