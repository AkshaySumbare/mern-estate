const errorhandler = require("./error");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(errorhandler(401), "Unauthorized");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorhandler(403, "Forbiddeen"));
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
