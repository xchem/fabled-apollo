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
          targetFromName(title: String!): Target
          targetFromID(target_id: Int!): Target
          targets: [Target]
          proteins: [Protein]
          proteinFromCode(code: String!): Protein
          proteinsFromTargetID(target_id: Int!): [Protein]
          proteinFromID(prot_id: Int!): Protein
          molecules: [Molecule]
          compounds: [Compound]
          activities: [Activity]
          activitiesByQuery(query: String!): [Activity]
          chemblMoleculeBySmiles(smiles: String!): [ChemblMol]
          compoundFromID(cmpd_id: Int!): Compound 
          moleculesFromTarget(title: String!): [Molecule]
        }
        `;

const schema = makeExecutableSchema({
        typeDefs: [Query, Protein, Target, Molecule, Compound, Activity, ChemblMol],
        resolvers: resolvers,
});

module.exports = schema;