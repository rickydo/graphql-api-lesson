// commanmd
// node index.js "{ ... }"

// schema

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    answer: Int
  }
`)

const root = {
  hello: () => "Hello World..",
  answer: () => 42
};


const express = require('express');
const server = express();

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
