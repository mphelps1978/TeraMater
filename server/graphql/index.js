const path = require('path')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { loadSchemaSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeResolvers } = require('@graphql-tools/merge')


const resolverFiles = loadFilesSync(path.join(__dirname, './resolvers'))

const typeDefs = loadSchemaSync("./**/*.schema.js", {
  loaders: [new GraphQLFileLoader()]
})

const resolvers = mergeResolvers(resolverFiles)

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = { schema }
