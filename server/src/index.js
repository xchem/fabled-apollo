require('dotenv').config();

const PORT = 3000;
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const FragalysisAPI = require('./datasources/fragalysis');

// console.log(FragalysisAPI());

// set up any dataSources our resolvers need
const dataSources = () => ({
  fragalysisAPI: new FragalysisAPI(),
});

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
// if (process.env.NODE_ENV !== 'test') {
server.listen({port: PORT}).then(() => {
  console.log(`
    Server is running!
    Listening on port ${PORT}
    Query at https://studio.apollographql.com/dev
  `)
});

