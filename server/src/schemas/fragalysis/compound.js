const {gql} = require('apollo-server');

const typeDef = gql`
     type Compound {
              id: Int
              inchi: String
              smiles: String
              mol_log_p: Float
              mol_wt: Float
              num_h_acceptors: Int
              num_h_donors: Int
            }
`

module.exports = typeDef;