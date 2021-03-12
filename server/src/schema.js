const { gql } = require('apollo-server');

const typeDefs = gql`
    type Target {
          id: Int
          title: String
          template_protein: String
          metadata: String
          zip_archive: String
          protein_set: [Int]
          project_id: [Int]
        }
        
    type Protein {
          id: Int
          code: String
          target_id: Int
          prot_type: String
          pdb_info: String
          bound_info: String
          mtz_info: String
          map_info: String
          cif_info: String
        }
        
    type Query {
          target(title: String!): Target
          targets: [Target]
          proteinFromCode(code: String!): Protein
          proteinsFromTargetID(target_id: Int!): [Protein]
          proteins: [Protein]
        }
        `;

module.exports = typeDefs;