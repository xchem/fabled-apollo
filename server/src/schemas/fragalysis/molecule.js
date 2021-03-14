const {gql} = require('apollo-server');

const typeDef = gql`
     type Molecule {
              id: Int
              smiles: String
              compound: Compound
              protein: Protein
              cmpd_id: Int
              prot_id: Int
              protein_code: String
              mol_type: String
              molecule_protein: String
              lig_id: String
              chain_id: String
              sdf_info: String
              x_com: String
              y_com: String
              z_com: String
              mw: Float
              logp: Float
              tpsa: Float
              ha: Int
              hacc: Int
              hdon: Int
              rots: Int
              rings: Int
              velec: Int
            }
`;

module.exports = typeDef;