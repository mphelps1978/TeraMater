const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

const usersType = new GraphQLObjectType({
  name: 'Users',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    token: {type: GraphQLString}
  })
})


module.exports = { usersType }