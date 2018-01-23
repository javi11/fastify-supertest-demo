const fastify = require('fastify')

module.exports = createServer
if (!module.parent) {
  const app = createServer()
  app.listen(8000, () => console.log('Listening'))
}

function createServer () {
  const app = fastify()

  app.get('/', (req, reply) => {
    reply.send({hello: 'world'})
  })

  return app
}
