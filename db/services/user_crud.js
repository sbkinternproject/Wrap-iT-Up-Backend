const UserModel = require("../models/user");
const encryption = require("../../utils/encrypt");
module.exports = {
    register(userObject) {
      userObject.password = encryption.generateHash(userObject.password);
      let promise = UserModel.create(userObject);
      return promise;
    },
    async login({ emailid, password }) {
      emailid = emailid.toLowerCase();
      const doc = await UserModel.findOne({ emailid: emailid });
      if (doc) {
        if (encryption.compareHash(doc.password, password)) {
          return doc;
        } else {
          return null;
        }
      }
      return null;
    },
    async getUserType(emailId){
      let promise = await UserModel.findOne({ emailid: emailId });
      return promise;
    }
  };