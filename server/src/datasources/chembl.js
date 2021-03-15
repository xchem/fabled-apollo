const {RESTDataSource} = require('apollo-datasource-rest');

class ChemblAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://www.ebi.ac.uk/chembl/api/data/';
    }

    activityReducer(activity) {
        return {
            activity_comment: activity.activity_comment,
            activity_id: activity.activity_id,
            assay_chembl_id: activity.assay_chembl_id,
            assay_description: activity.assay_description,
            assay_type: activity.assay_type,
            assay_variant_accession: activity.assay_variant_mutation,
            assay_variant_mutation: activity.assay_variant_mutation,
            bao_endpoint: activity.bao_endpoint,
            bao_format: activity.bao_format,
            bao_label: activity.bao_label,
            canonical_smiles: activity.canonical_smiles,
            data_validity_comment: activity.data_validity_comment,
            data_validity_description: activity.data_validity_description,
            document_chembl_id: activity.document_chembl_id,
            document_journal: activity.document_journal,
            document_year: activity.document_year,
            ligand_efficiency: activity.ligand_efficiency,
            molecule_chembl_id: activity.molecule_chembl_id,
            molecule_pref_name: activity.molecule_pref_name,
            parent_molecule_chembl_id: activity.parent_molecule_chembl_id,
            pchembl_value: activity.pchembl_value,
            potential_duplicate: activity.potential_duplicate,
            qudt_units: activity.gudt_units,
            record_id: activity.record_id,
            relation: activity.relation,
            src_id: activity.src_id,
            standard_flag: activity.standard_flag,
            standard_relation: activity.standard_relation,
            standard_text_value: activity.standard_text_value,
            standard_type: activity.standard_type,
            standard_units: activity.standard_units,
            standard_upper_value: activity.standard_upper_value,
            standard_value: activity.standard_value,
            target_chembl_id: activity.target_chembl_id,
            target_organism: activity.target_organism,
            target_pref_name: activity.target_pref_name,
            target_tax_id: activity.target_tax_id,
            text_value: activity.text_value,
            toid: activity.toid,
            type: activity.type,
            units: activity.units,
            uo_units: activity.uo_units,
            upper_value: activity.upper_value,
            value: activity.value,
            activity_properties: activity.properties,
        };
    }

    async getAllActivities(limit = 50, offset = 0) {
        const response = await this.get(`activity/?format=json&limit=${limit}&offset=${offset}`);
        const result = response.activities;
        return Array.isArray(result)
            ? result.map(activity => this.activityReducer(activity))
            : [];

    }

    async getActivityByQuery(query, limit = 50, offset = 0) {
        const response = await this.get(`activity/search?format=json&limit=${limit}&offset=${offset}&q=${query}`);
        console.log(response)
        const result = response.activities;
        return Array.isArray(result)
            ? result.map(activity => this.activityReducer(activity))
            : [];
    }

    moleculeReducer(molecule) {
        return {
            availability_type: molecule.availability_type,
            biotherapeutic: molecule.biotherapeutic,
            black_box_warning: molecule.black_box_warning,
            chebi_par_id: molecule.chebi_par_id,
            chirality: molecule.chirality,
            dosed_ingredient: molecule.dosed_ingredient,
            first_approval: molecule.first_approval,
            first_in_class: molecule.first_in_class,
            helm_notation: molecule.helm_notation,
            indication_class: molecule.indication_class,
            inorganic_flag: molecule.inorganic_flag,
            max_phase: molecule.max_phase,
            molecule_chembl_id: molecule.molecule_chembl_id,
            molecule_type: molecule.molecule_type,
            natural_product: molecule.natural_product,
            oral: molecule.oral,
            parenteral: molecule.parenteral,
            polymer_flag: molecule.polymer_flag,
            pref_name: molecule.pref_name,
            prodrug: molecule.prodrug,
            structure_type: molecule.structure_type,
            therapeutic_flag: molecule.therapeutic_flag,
            topical: molecule.topical,
            usan_stem: molecule.usan_stem,
            usan_stem_definition: molecule.usan_stem_definition,
            usan_substem: molecule.usan_substem,
            usan_year: molecule.usan_year,
            withdrawn_class: molecule.withdrawn_class,
            withdrawn_country: molecule.withdrawn_country,
            withdrawn_flag: molecule.withdrawn_flag,
            withdrawn_reason: molecule.withdrawn_reason,
            withdrawn_year: molecule.withdrawn_year,
            molecule_synonyms: molecule.molecule_synonyms,
            molecule_structures: molecule.molecule_structures,
            molecule_properties: molecule.molecule_properties,
            molecule_hierarchy: molecule.molecule_hierarchy,
            cross_references: molecule.cross_references,
            atc_classifications: molecule.atc_classifications,
            activities: molecule.activities,
        }
    }

    async getChemblMoleculeBySmiles(smiles, limit = 50, offset = 0) {
        const response = await this.get(`molecule/?molecule_structures__canonical_smiles__flexmatch=${encodeURIComponent(smiles)}&format=json&limit=${limit}&offset=${offset}`);
        const result = response.molecules;
        return Array.isArray(result)
            ? result.map(molecule => this.moleculeReducer(molecule))
            : [];
    }

}

module.exports = ChemblAPI;