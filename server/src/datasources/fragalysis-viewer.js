const {RESTDataSource} = require('apollo-datasource-rest');

class FragalysisViewer extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://fragalysis.diamond.ac.uk/viewer';
    }

    sequenceReducer(sequence) {
        return {
            chain: sequence.chain,
            sequence: sequence.sequence,
        }
    }

    async getSequenceFromID(prot_id) {
        const response = await this.get(`/prot_sequence/?prot_id=${prot_id}`);
        const result = JSON.parse(response);
        return Array.isArray(result)
            ? result.map(sequence => this.sequenceReducer(sequence))
            : [];
    }

    async getSequenceFromPath(prot_path) {
        console.log(this.baseURL)
        console.log(encodeURIComponent(prot_path))
        console.log(prot_path)
        console.log(`/prot_sequence/?prot_path=${encodeURIComponent(prot_path)}`)
        const response = await this.get(`/prot_sequence/?prot_path=${encodeURIComponent(prot_path)}`);
        console.log(response)
        const result = JSON.parse(response);
        return Array.isArray(result)
            ? result.map(sequence => this.sequenceReducer(sequence))
            : [];
    }

}

module.exports = FragalysisViewer;