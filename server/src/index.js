require('dotenv').config();

const PORT = 3000;
const { ApolloServer } = require('apollo-server');
const schema = require('./schema');
const FragalysisAPI = require('./datasources/fragalysis');
const ChemblAPI = require('./datasources/chembl');
const FragalysisViewer = require('./datasources/fragalysis-viewer');
const RCSBPDB = require('./datasources/rcsb-pdb')

// set up any dataSources our resolvers need
const dataSources = () => ({
  fragalysisAPI: new FragalysisAPI(),
  chemblAPI: new ChemblAPI(),
  fragalysisViewer: new FragalysisViewer(),
  rcsbPDB: new RCSBPDB(),
});

// Set up Apollo Server
const server = new ApolloServer({ schema, dataSources });

// Start our server
server.listen({port: PORT}).then(() => {
  console.log(`
    Server is running!
    Listening on port ${PORT}
    Query at https://studio.apollographql.com/dev
  `)
});

