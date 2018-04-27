// commanmd
// node index.js "{ ... }"
// nodemon to restart server everytime you save the file
// npx nodemon index.js

// schema
const schema = require('./schema');

let counterValue = 1;

let getPeople = () => {
  return new Promise((resolve, reject) => {
    resolve(
      [
        {
          id: 1,
          firstName: "ricky1",
          lastName: "d",
          email: "ricky.d@mail.com"

        }, {
          id: 2,
          firstName: "ricky2",
          lastName: "d",
          email: "ricky.d@mail.com"

        }, {
          id: 3,
          firstName: "ricky3",
          lastName: "d",
          email: "ricky.d@mail.com"

        }
      ]
    )
  })
}

// dont make multiple db calls
// batch ... cache
let getFriends = (personId) => {
  // list of friends
}

// don't let javascript find the person
// define function on backend to find it
let getPerson = (personId) => {
  // db
  // db.collection('people').find({id: personId})
}


const root = {
  hello: () => "Hello World..",
  answer: () => 42, //trailing comma (valid in modern javascript)
  counter: () => counterValue,
  first3Primes: () => [
    2, 3, 5
  ],
  person: async (args) => {
    const people = await getPeople()
    return people.find(person => person.id === args.id)
  },
  incrementCounter: () => ++counterValue,
  people: () => getPeople(),
};

// use mutation to manipulate data instead of inside the query

const graphqlHTTP = require('express-graphql');
const express = require('express');
const server = express();

server.use('/', graphqlHTTP({ // 'use' does both GET and POST
  schema, // shorthand for schema: schema
  rootValue: root,
  graphiql: true
}))

server.listen(3000, () => {
  console.log("Server is running...")
})

//  interface
//
// / query
// const query = process.argv[2];
//
// graphql(schema, query, root)
//    promise
//   .then(response => {
//     console.log(response);
//   })
