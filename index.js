// commanmd
// node index.js "{ ... }"
// nodemon to restart server everytime you save the file
// npx nodemon index.js

// schema

const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    answer: Int
    counter: Int
    first3Primes: [Int]
    ricky: Person
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

let counterValue = 1;
let person = {
  firstName: "ricky",
  lastName: "d",
  email: "ricky.d@mail.com"
}

const root = {
  hello: () => "Hello World..",
  answer: () => 42, //trailing comma (valid in modern javascript)
  counter: () => counterValue,
  first3Primes: () => [2,3,5],
  ricky: () => person,
  incrementCounter: () => ++counterValue,
};

// use mutation to manipulate data instead of inside the query


const graphqlHTTP = require('express-graphql');
const express = require('express');
const server = express();

server.use('/', graphqlHTTP({  // 'use' does both GET and POST
  schema, // shorthand for schema: schema
  rootValue: root,
  graphiql: true
}))

server.listen( 3000, () => {
  console.log("Server is running...")
})



// // interface
//
// /// query
// const query = process.argv[2];
//
// graphql(schema, query, root)
//   // promise
//   .then(response => {
//     console.log(response);
//   })
