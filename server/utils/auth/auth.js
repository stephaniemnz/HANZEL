const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiration = '2h'; 

const authMiddleware = (req, res, next) => {

  let token = req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token
      .split(' ')
      .pop()
      .trim();
  }

  if (!token) {
    return res.status(401).json({ message: 'You have no token!' });
  }

  try {
    // Decode and attach user data to the request object
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
    return res.status(401).json({ message: 'Invalid token!' });
  }

  next();
};

const signToken = ({ username, email, _id }) => {
  const payload = { username, email, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthenticationError';
  }
}

module.exports = {
  signToken,
  authMiddleware,
  AuthenticationError
};
