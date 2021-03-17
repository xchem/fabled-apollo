const {gql} = require('apollo-server');

const typeDef = gql`
    
    type RelatedStructure {
        identifier: String
        score: Float
        sequence_identity: Float
        evalue: Float
        bitscore: Int
        alignment_length: Int
        mismatches: Int
        gaps_opened: Int
        query_beg: Int
        query_end: Int
        subject_beg: Int
        subject_end: Int
        query_length: Int
        subject_length: Int
        query_aligned_seq: String
        subject_aligned_seq: String
        
    }
    
    type RelatedStructures {
        total_count: Int
        included: Int
        structures: [RelatedStructure]
    }
        
    `;

module.exports = typeDef;