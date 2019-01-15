const fs = require('fs');
const jwtL = require('jsonwebtoken');

module.exports = (req, res, next) => {
  let token = req.cookies.jwt;

  if (!token) {
    req.status = 401
    throw new Error(`Access denied. No Jwt present in cookies`);
  }
  else{
    const publickey = fs.readFileSync('jwtRS256.pem', 'utf8');
    jwtData = jwtL.verify(token, publickey)
    if (!jwtData) {
      req.status = 401
      throw new Error('Access denied. Unable to authenticate');
    }
  }
  next();
};
