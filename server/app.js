const express = require("express")
const graphqlHTTP = require("express-graphql")
const mongoose = require("mongoose")
const cors = require("cors")

const schema = require("./schema/schema")

const app = express()

// allow cross-origin requests
app.use(cors())

mongoose.connect(
  "mongodb+srv://Ben:Y1zQeEOaPYGwcl9l@gql-ninja-demo.dblxo.mongodb.net/GQL-Ninja-Demo?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
)

mongoose.connection.once("open", () => {
  console.log("connected to the database")
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log("Now listening for requests on port 4000")
})
