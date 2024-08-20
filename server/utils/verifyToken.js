
const jwt = require("jsonwebtoken");
const errorhandler = require('./error.js')
const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorhandler(401), "Unauthorized");
  
  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return next(errorhandler(403, "Forbiddeen"));
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
