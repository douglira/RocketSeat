const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../../config/auth');

module.exports = {
  authenticate: async (req, res, next) => {
    const { token } = req.cookies;

    console.log(req);

    if (!token) {
      return res.status(401).json({ error: 'Token not provided' });
    }

    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      req.userId = decoded.id;

      return next();
    } catch (err) {
      res.clearCookie('token');
      return next(err);
    }
  },

  verifyAuthentication: (req, res) => res.json(),
};

// module.exports = async (req, res, next) => {
//   console.log(req.cookies);
//   const authToken = req.headers.authorization;

//   if (!authToken) {
//     return res.status(401).json({ error: 'Token not provided' });
//   }

//   const parts = authToken.split(' ');

//   if (parts.length !== 2) {
//     return res.status(401).json({ error: 'Token error' });
//   }

//   const [scheme, token] = parts;

//   if (!/^Bearer$/.test(scheme)) {
//     return res.status(401).json({ error: 'Token malformatted' });
//   }

//   try {
//     const decoded = await promisify(jwt.verify)(token, authConfig.secret);

//     req.userId = decoded.id;

//     return next();
//   } catch (err) {
//     return next(err);
//   }
// };
