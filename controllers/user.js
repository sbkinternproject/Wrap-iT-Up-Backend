const { SUCCESS, SERVER_ERROR, NOT_FOUND } =
  require("../utils/config").STATUS_CODES;
const messageBundle = require("../locales/en");
const userOperations = require("../db/services/user_crud");
const jwt = require("../utils/token");
const userController = {
    show(request, response) {
      response.send("U r on Show Section");
    },
}
module.exports = userController; 