const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    allTodo: [Todo]
  }

  type Todo {
    id: ID!
    description: String
    completed: Boolean
    createdAt: Int
    priority: Int
  }
`;

module.exports = typeDefs;
