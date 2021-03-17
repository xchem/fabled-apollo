const {gql} = require('apollo-server');

const typeDef = gql`
    type Sequence {
      chain: String
      sequence: String
    }
    
    type Sequences {
      sequences: [Sequence]
    }
`;

module.exports = typeDef;
