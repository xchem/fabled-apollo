const { gql } = require('apollo-server');

const typeDef = gql`
    type Sequences {
      chain: String
      sequence: String
      related_structures: [RelatedStructure]
    }
    
    type Target {
      id: Int
      title: String
      template_protein: String
      metadata: String
      zip_archive: String
      sequences: [Sequences]
      protein_set: [Int]
      project_id: [Int]
    }

            
     type RelatedTargetStructures {
        target : Target
        related_structures: [RelatedStructure]
     }
`;

module.exports = typeDef;