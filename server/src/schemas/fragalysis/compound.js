const {gql} = require('apollo-server');

const typeDef = gql`
     type Compound {
              id: Int
              inchi: String
              long_inchi: String
              smiles: String
              current_identifier: String
              all_identifiers: String
              mol_log_p: Float
              mol_wt: Float
              tpsa: Float
              heavy_atom_count: Int
              heavy_atom_mol_wt: Float
              nhoh_count: Int
              no_count: Int
              num_h_acceptors: Int
              num_h_donors: Int
              num_het_atoms: Int
              num_rot_bonds: Int
              num_val_electrons: Int
              ring_count: Int
              chembl_mols: [ChemblMol]
            }
`

module.exports = typeDef;