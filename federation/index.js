const { ApolloGateway } = require("@apollo/gateway");
const { ApolloServer } = require('apollo-server');

const gateway = new ApolloGateway({
  serviceList: [
    { name: "fabled", url: "https://localhost:3000/graphql" },
    { name: "rcsb-pdb", url: "https://data.rcsb.org/graphql" },
  ]
});

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway,

  // Disable subscriptions (not currently supported with ApolloGateway)
  subscriptions: false,
});

server.listen({port: 3030}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

