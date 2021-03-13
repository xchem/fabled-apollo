const { gql } = require('apollo-server');
const { makeExecutableSchema } = require('apollo-server');
const resolvers = require('./resolvers');
const Target = require('./schemas/fragalysis/target');
const Protein = require('./schemas/fragalysis/protein');
const Molecule = require('./schemas/fragalysis/molecule');
const Compound = require('./schemas/fragalysis/compound');
const Activity = require('./schemas/chembl/activities');
const ChemblMol = require('./schemas/chembl/molecule');

const Query = gql`       
          
    type Query {
          target(title: String!): Target
          targets: [Target]
          proteinFromCode(code: String!): Protein
          proteinsFromTargetID(target_id: Int!): [Protein]
          proteins: [Protein]
          molecules: [Molecule]
          compounds: [Compound]
          activities: [Activity]
          activitiesByQuery(query: String!): [Activity]
          chemblMoleculeBySmiles(smiles: String!): [ChemblMol]
        }
        `;

const schema = makeExecutableSchema({
        typeDefs: [Query, Protein, Target, Molecule, Compound, Activity, ChemblMol],
        resolvers: resolvers,
});

module.exports = schema;