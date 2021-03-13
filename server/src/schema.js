const { gql } = require('apollo-server');
const { makeExecutableSchema } = require('apollo-server');
const resolvers = require('./resolvers');
const Target = require('./schemas/fragalysis/target');
const Protein = require('./schemas/fragalysis/protein');
const Molecule = require('./schemas/fragalysis/molecule');
const Compound = require('./schemas/fragalysis/compound');

const Query = gql`       
          
    type Query {
          target(title: String!): Target
          targets: [Target]
          proteinFromCode(code: String!): Protein
          proteinsFromTargetID(target_id: Int!): [Protein]
          proteins: [Protein]
          molecules: [Molecule]
          compounds: [Compound]
        }
        `;

const schema = makeExecutableSchema({
        typeDefs: [Query, Protein, Target, Molecule, Compound],
        resolvers: resolvers,
});

module.exports = schema;