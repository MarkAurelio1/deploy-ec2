const { gql } = require('apollo-server')

const typeDefs = gql `
type User {
  id: Int
  name: String
  email: String
  password: String
}

input UsuarioInput {
  name: String
  email: String
  password: String
}

type Query {
  users: [User!]!
}

type Mutation {
  createUser(data: UsuarioInput): User!
  updateUser(id: Int!, data: UsuarioInput): User!
  deleteUser(id: Int!): Boolean 
}`

module.exports = typeDefs