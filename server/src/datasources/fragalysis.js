const {RESTDataSource} = require('apollo-datasource-rest');

class FragalysisAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://fragalysis.diamond.ac.uk/api/';
    }

    compoundReducer(compound) {
        return {
            id: compound.id,
            inchi: compound.inchi,
            long_inchi: compound.long_inchi,
            smiles: compound.smiles,
            current_identifier: compound.current_identifier,
            all_identifiers: compound.all_identifiers,
            mol_log_p: compound.mol_log_p,
            mol_wt: compound.mol_wt,
            tpsa: compound.tpsa,
            heavy_atom_count: compound.heavy_atom_count,
            nhoh_count: compound.nhoh_count,
            no_count: compound.no_count,
            num_h_acceptors: compound.num_h_acceptors,
            num_h_donors: compound.num_h_donors,
            num_het_atoms: compound.num_het_atoms,
            num_rot_bonds: compound.num_rot_bonds,
            num_val_electrons: compound.num_val_electrons,
            ring_count: compound.ring_count,
        }
    }

    async getAllCompounds() {
        const response = await this.get('compounds');
        const result = response.results;
        return Array.isArray(result)
          ? result.map(compound => this.compoundReducer(compound))
          : [];
    }

    async getCompoundFromID(cmpd_id) {
        const response = await this.get(`compounds/${cmpd_id}`);
        console.log(response);
        return this.compoundReducer(response)
    }

    targetReducer(target) {
        return {
            id: target.id,
            title: target.title,
            template_protein: target.template_protein,
            metadata: target.metadata,
            zip_archive: target.zip_archive,
            protein_set: target.protein_set,
            project_id: target.project_id,
            sequences: target.sequences,
        };
    }

    async getAllTargets() {
        const response =  await this.get('targets');
        const result = response.results;
        return Array.isArray(result)
          ? result.map(target => this.targetReducer(target))
          : [];

    }

    async getATarget(title) {
        const response = await this.get('targets', {title: title});
        console.log(response);
        console.log(response["results"]);
        return this.targetReducer(response.results[0])
    }

    async getTargetFromID(target_id) {
        const response = await this.get(`targets/${target_id}`);
        console.log(response);
        return this.targetReducer(response)
    }

    proteinReducer(protein) {
        return {
            id: protein.id,
            code: protein.code,
            target_id: protein.target_id,
            prot_type: protein.prot_type,
            pdb_info: protein.pdb_info,
            bound_info: protein.bound_info,
            mtz_info: protein.mtz_info,
            map_info: protein.map_info,
            cif_info: protein.cif_info,
        };
    }

    async getAllProteins() {
        const response =  await this.get('proteins');
        const result = response.results;
        return Array.isArray(result)
          ? result.map(protein => this.proteinReducer(protein))
          : [];
    }

    async getProteinFromCode(code) {
        const response = await this.get(`proteins/?code=${code}`);
        // const result = response.results;
        console.log(response);
        console.log(response.results);
        return this.proteinReducer(response.results[0])

    }

    async getProteinFromID(prot_id) {
        const response = await this.get(`proteins/${prot_id}`);
        return this.proteinReducer(response)
    }

    async getProteinsFromTargetID(target_id) {
        const response = await this.get(`proteins/?target_id=${target_id}`);
        const result = response.results;
        return Array.isArray(result)
          ? result.map(protein => this.proteinReducer(protein))
          : [];

    }

    moleculeReducer(molecule) {
        return {
            id: molecule.id,
            smiles: molecule.smiles,
            cmpd_id: molecule.cmpd_id,
            prot_id: molecule.prot_id,
            protein_code: molecule.protein_code,
            mol_type: molecule.mol_type,
            molecule_protein: molecule.molecule_protein,
            lig_id: molecule.lig_id,
            chain_id: molecule.chain_id,
            sdf_info: molecule.sdf_info,
            x_com: molecule.x_com,
            y_com: molecule.y_com,
            z_com: molecule.z_com,
            mw: molecule.mw,
            logp: molecule.logp,
            tpsa: molecule.tpsa,
            ha: molecule.tpsa,
            hacc: molecule.hacc,
            hdon: molecule.hdon,
            rots: molecule.rots,
            rings: molecule.rings,
            velec: molecule.velec,

        }
    }

    async getAllMolecules() {
        const response = await this.get('molecules');
        const result = response.results;
        return Array.isArray(result)
          ? result.map(molecule => this.moleculeReducer(molecule))
          : [];
    }

    async getMoleculesFromTarget(title) {
        const response = await this.get(`molecules/?prot_id__target_id__title=${title}`);
        const result = response.results;
        return Array.isArray(result)
          ? result.map(molecule => this.moleculeReducer(molecule))
          : [];
    }
}

module.exports = FragalysisAPI;