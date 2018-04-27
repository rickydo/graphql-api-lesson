const {buildSchema} = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    answer: Int
    counter: Int
    first3Primes: [Int]
    person(id: Int): Person
    people: [Person]
  }
  type Mutation {
    incrementCounter: Int
  }
  type Person {
    firstName: String
    lastName: String
    email: String
  }
`)

// can break it out further 

// const { GraphQLSchema, GraphQLObject, GraphQLString } = require('graphql');
//
// const schema = new GraphQLSchema({
//
// })
//
// const Person = new GraphQLObject({
//
// })


module.exports = schema;
