const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const secret = "uhHanzel";
const expiration = "2h";

module.exports = {
  AuthenticationError: new GraphQLError("Could not authenticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    if (!token) {
      return req;
    }

    if (token) {
      try {
        const { data } = jwt.verify(token, secret, { expiresIn: expiration });
        return { ...req, user: data };
      } catch {
        throw new AuthenticationError("Invalid token!");
      }
    }
  },
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
