const { gql } = require('apollo-server');

const typeDef = gql`
    type Target {
              id: Int
              title: String
              template_protein: String
              metadata: String
              zip_archive: String
              protein_set: [Int]
              project_id: [Int]
              ref_sequences: [Sequence]
            }
            
     type RelatedTargetStructures {
        target : Target
        related_structures: [RelatedStructure]
     }
`;

module.exports = typeDef;