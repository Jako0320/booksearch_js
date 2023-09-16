const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book!]
  }

  type Book {
    _id: ID!
    bookId: String!
    author: [String]!
    description: String!
    title: String!
    image: String
    link: String
  }
 
  input bookInput {
    author: [String!]
    description: String
    title: String
    bookId:ID!
    image: String
    link: String
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(_id: ID!, bookToAdd: BookInput!): User
    removeBook(_id: ID!, bookToRemove: ID!): User
  }
`;

module.exports = typeDefs;
