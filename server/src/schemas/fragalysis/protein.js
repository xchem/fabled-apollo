const { gql } = require('apollo-server');

const typeDef = gql`
     type Protein {
              id: Int
              code: String
              target_id: Int
              target: Target
              prot_type: String
              pdb_info: String
              bound_info: String
              mtz_info: String
              map_info: String
              cif_info: String
            }
`

module.exports = typeDef;