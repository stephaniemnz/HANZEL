const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'uhHanzel'
const expiration = '2h';

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    authMiddleware: async (req, res, next) => {
        const token = req.header('Authorization');

        if (!token) {
            throw new this.AuthenticationError('Access denied');
        }

        try {
            const decoded = jwt.verify(token, 'secret');
            req.user = await User.findById(decoded.userId);
            next();
        } catch (error) {
            throw new this.AuthenticationError('Invalid token');
        }
    },
    signToken: function ({ firstName, email, _id }) {
        const payload = { firstName, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};