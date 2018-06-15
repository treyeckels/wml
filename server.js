const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const app = express()
const port = process.env.PORT || 5000
const { typeDefs } = require('./graphql/typedefs')
const { resolvers } = require('./graphql/resolvers')

/**
 * Apollo GraphQl Executable Schema
 */
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => {
    return {
      schema,
      context: {
        apiKey: process.env.API_KEY,
        api: 'http://api.walmartlabs.com/v1/'
      }
    }
  })
)

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

app.listen(port, () => console.log(`Listening on port ${port}`))
