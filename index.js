// commanmd
// node index.js "{ ... }"

// schema

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: () => {
    return "Hello World..";
  }
};

// interface

/// query
const query = process.argv[2];

graphql(schema, query, root)
  // promise
  .then(response => {
    console.log(response);
  })
