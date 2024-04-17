const typeDefs = `
  type Photo {
    id: ID!
    title: String!
    description: String!
    imageUrl: String!
    upvotes: Int!
  }

  type Query {
    photos: [Photo]!
    photo(id: ID!): Photo
  }

  type Mutation {
    upvotePhoto(id: ID!): Photo
  }
`;

module.exports = typeDefs;