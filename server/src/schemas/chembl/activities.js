const {gql} = require('apollo-server');

const typeDef = gql`
    type ActivityPageMeta {
      limit: Int
      next: String
      offset: Int
      previous: String
      total_count: Int
    }
    
    type Activity {
      activity_comment: String
      activity_id: Int
      assay_chembl_id: String
      assay_description: String
      assay_type: String
      assay_variant_accession: String
      assay_variant_mutation: String
      bao_endpoint: String
      bao_format: String
      bao_label: String
      canonical_smiles: String
      data_validity_comment: String
      data_validity_description: String
      document_chembl_id: String
      document_journal: String
      document_year: Int
      ligand_efficiency: String
      molecule_chembl_id: String
      molecule_pref_name: String
      parent_molecule_chembl_id: String
      pchembl_value: String
      potential_duplicate: Boolean
      qudt_units: String
      record_id: Int
      relation: String
      src_id: Int
      standard_flag: Boolean
      standard_relation: String
      standard_text_value: String
      standard_type: String
      standard_units: String
      standard_upper_value: String
      standard_value: String
      target_chembl_id: String
      target_organism: String
      target_pref_name: String
      target_tax_id: String
      text_value: String
      toid: String
      type: String
      units: String
      uo_units: String
      upper_value: String
      value: String
      activity_properties: [String]
    }
    
    type ActivityMainType {
      page_meta: ActivityPageMeta
      activities: [Activity]
    }
`;

module.exports = typeDef;