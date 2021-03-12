const {RESTDataSource} = require('apollo-datasource-rest');

class FragalysisAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://fragalysis.diamond.ac.uk/api/';
    }

    targetReducer(target) {
        return {
            id: target.id || 0,
            title: target.title,
            template_protein: target.template_protein,
            metadata: target.metadata,
            zip_archive: target.zip_archive,
            protein_set: target.protein_set,
            project_id: target.project_id,
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

    async getProteinsFromTargetID(target_id) {
        console.log(target_id);
        console.log(`proteins/?target_id=${target_id}`)
        const response = await this.get(`proteins/?target_id=${target_id}`);
        const result = response.results;
        console.log(response);
        console.log(response.results);
        return Array.isArray(result)
          ? result.map(protein => this.proteinReducer(protein))
          : [];

    }
}

module.exports = FragalysisAPI;