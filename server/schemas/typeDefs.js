const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int!
    savedBooks: [Book!]
  }

  type Book {
    _id: ID!
    bookId: String!
    author: [String]!
    description: String1
    title: String
    image: String
    link: String
  }
 
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(input:bookInput): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
