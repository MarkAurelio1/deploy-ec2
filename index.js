const { ApolloServer } = require('apollo-server')
const resolvers = require('./src/graphql/modules/resolvers')
const typeDefs = require('./src/graphql/modules/schema')

const server = new ApolloServer({
   typeDefs,
   resolvers
})

server.listen().then(({url}) => console.log(url))

