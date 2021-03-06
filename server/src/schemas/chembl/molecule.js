const {gql} = require('apollo-server');

const typeDef = gql`
        type PageMeta {
          limit: Int
          next: String
          offset: Int
          previous: String
          total_count: Int
        }
        
        type MoleculeSynonyms {
          molecule_synonym: String
          syn_type: String
          synonyms: String
        }
        
        type MoleculeStructures {
          canonical_smiles: String
          molfile: String
          standard_inchi: String
          standard_inchi_key: String
        }
        
        type MoleculeProperties {
          alogp: String
          aromatic_rings: Int
          cx_logd: String
          cx_logp: String
          cx_most_apka: String
          cx_most_bpka: String
          full_molformula: String
          full_mwt: String
          hba: Int
          hba_lipinski: Int
          hbd: Int
          hbd_lipinski: Int
          heavy_atoms: Int
          molecular_species: String
          mw_freebase: String
          mw_monoisotopic: String
          num_lipinski_ro5_violations: Int
          num_ro5_violations: Int
          psa: String
          qed_weighted: String
          ro3_pass: String
          rtb: Int
        }
        
        type MoleculeHierarchy {
          molecule_chembl_id: String
          parent_chembl_id: String
        }
        
        type CrossReferences {
          xref_id: String
          xref_name: String
          xref_src: String
        }
        
        type ChemblMol {
          availability_type: Int
          biotherapeutic: String
          black_box_warning: Int
          chebi_par_id: Int
          chirality: Int
          dosed_ingredient: Boolean
          first_approval: String
          first_in_class: Int
          helm_notation: String
          indication_class: String
          inorganic_flag: Int
          max_phase: Int
          molecule_chembl_id: String
          molecule_type: String
          natural_product: Int
          oral: Boolean
          parenteral: Boolean
          polymer_flag: Boolean
          pref_name: String
          prodrug: Int
          structure_type: String
          therapeutic_flag: Boolean
          topical: Boolean
          usan_stem: String
          usan_stem_definition: String
          usan_substem: String
          usan_year: String
          withdrawn_class: String
          withdrawn_country: String
          withdrawn_flag: Boolean
          withdrawn_reason: String
          withdrawn_year: String
          molecule_synonyms: [MoleculeSynonyms]
          molecule_structures: MoleculeStructures
          molecule_properties: MoleculeProperties
          molecule_hierarchy: MoleculeHierarchy
          cross_references: [CrossReferences]
          atc_classifications: [String]
          activities: [Activity]
        }
        
        type AutogeneratedMainType {
          page_meta: PageMeta
          molecules: [ChemblMol]
        }
        `;

module.exports = typeDef;