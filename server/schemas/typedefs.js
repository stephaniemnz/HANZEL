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
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Query {
    photos(photo: ID, name: String): [Photo]
    photo(_id: ID!): Photo
    user: User
    order(_id: ID!): Order
    checkout(photos: [PhotoInput]): Checkout
  }

  type Mutation {
    upvotePhoto(id: ID!): Photo
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;