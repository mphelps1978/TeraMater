require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { graphiqlHTTP } = require('express-graphql')
const colors = require('colors')
const port = process.env.PORT || 4040

const schema = require('./graphql/')
const connectDB = require('./graphql/config/connectDB')

const app = express()
connectDB()

app.use(cors())

app.use('/graphql', graphiqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'dev'
}))

app.listen(port, console.log('Server Running on port: '.brightGreen.bold, port.brightCyan.bold))