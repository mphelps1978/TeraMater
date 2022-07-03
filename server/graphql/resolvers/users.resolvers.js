const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString } = require('graphql')
const usersType = require('../schemas/users.schema')
const Users = require('../models/users')

// QUERIES

// Get all Users
const userQueries = new GraphQLObjectType({
  name: 'getUsers',
  fields: {
    users: {
      type: new GraphQLList(usersType),
      resolve(parent, args) {
        return Users.find()
      }
    }
    
  }
})





//MUTATIONS

// Add a User
const userMutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: userType,
      args: {
        userName: {type: GraphQLNonNull(GraphQLString)},
        email: {type: GraphQLNonNull(GraphQLString)},
        password: { type: GraphQLNonNull(GraphQLString) },
      }
    }
  }
})


module.exports = {
  userQueries,
  userMutations
}