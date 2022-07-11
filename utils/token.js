const jwt = require("jsonwebtoken");
module.exports = {
  secret: process.env.SECRET,
  generateToken(emailid) {
    let tokenId = jwt.sign({ userid: emailid.toLowerCase() }, this.secret, {
      expiresIn: "1h",
    });
    return tokenId;
  },
  verifyToken(tokenId) {
    try {
      let decode = jwt.verify(tokenId, this.secret);
      if (decode && decode.userid) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log("VERIFY TOKEN ", err);
      return false;
    }
  },
};
