const test = require('ava')
const request = require('supertest')

const createServer = require('./server')

test('hello world', () => {
  const server = createServer()
  return request(server)
    .get('/')
    .expect(200, {hello: 'world'})
})
