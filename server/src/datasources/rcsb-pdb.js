const {RESTDataSource} = require('apollo-datasource-rest');

class RCSBPDB extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://search.rcsb.org/rcsbsearch/v1';
    }

    relatedStructureReducer(result_set) {
        return {
            identifier: result_set.identifier,
            score: result_set.score,
            sequence_identity: result_set.services[0].nodes[0].match_context[0].sequence_identity,
            evalue: result_set.services[0].nodes[0].match_context[0].evalue,
            bitscore: result_set.services[0].nodes[0].match_context[0].bitscore,
            alignment_length: result_set.services[0].nodes[0].match_context[0].alignment_length,
            mismatches: result_set.services[0].nodes[0].match_context[0].mismatches,
            gaps_opened: result_set.services[0].nodes[0].match_context[0].gaps_opened,
            query_beg: result_set.services[0].nodes[0].match_context[0].query_beg,
            query_end: result_set.services[0].nodes[0].match_context[0].query_end,
            subject_beg: result_set.services[0].nodes[0].match_context[0].subject_beg,
            subject_end: result_set.services[0].nodes[0].match_context[0].subject_end,
            query_length: result_set.services[0].nodes[0].match_context[0].query_length,
            subject_length: result_set.services[0].nodes[0].match_context[0].subject_length,
            query_aligned_seq: result_set.services[0].nodes[0].match_context[0].query_aligned_seq,
            subject_aligned_seq: result_set.services[0].nodes[0].match_context[0].subject_aligned_seq,

        }
    }

    async getRelatedFromSequence(sequence, identity_cutoff=0.9, limit=10, offset=0) {
        const query_string = `
        {
  "query": {
    "type": "terminal",
    "service": "sequence",
    "parameters": {
      "evalue_cutoff": 1,
      "identity_cutoff": ${identity_cutoff},
      "target": "pdb_protein_sequence",
      "value": "${sequence}"
    }
  },
  "request_options": {
    "pager": {"start": ${offset},
              "rows": ${limit}}
  },
  "return_type": "polymer_entity"
}
        `

        const query_no_cr = query_string.replace(/[\n\r]+/g, '')
        const query_no_s = query_no_cr.replace(/\s{1,10}/g, '')
        const encoded = encodeURIComponent(query_no_s)

        const response = await this.get(`/query?json=${encoded}`);

        const results = response.result_set;

        return Array.isArray(results)
            ? results.map(result_set => this.relatedStructureReducer(result_set))
            : [];
    }

}

module.exports = RCSBPDB;