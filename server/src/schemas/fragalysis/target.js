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
            }
`

module.exports = typeDef;