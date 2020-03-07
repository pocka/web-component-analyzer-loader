const compiler = require('./compiler')

test('CustomElement', async () => {
  const stats = await compiler('custom-element.js')
  const output = stats.toJson().modules[0].source

  expect(output).toMatch(/^module\.exports={[\s\S]+}$/)
  expect(output).toMatchSnapshot()
})

test('lit-element', async () => {
  const stats = await compiler('lit-element.js')
  const output = stats.toJson().modules[0].source

  expect(output).toMatch(/^module\.exports={[\s\S]+}$/)
  expect(output).toMatchSnapshot()
})
