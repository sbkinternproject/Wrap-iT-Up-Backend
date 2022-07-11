const { SUCCESS, SERVER_ERROR, NOT_FOUND } =
  require("../utils/config").STATUS_CODES;
const messageBundle = require("../locales/en");
const userOperations = require("../db/services/user_crud");
const jwt = require("../utils/token");
const userController = {
    show(request, response) {
      response.send("U r on Show Section");
    },
    register(request, response){
        // response.send("You are on Register URL now");
        let userObject = {
            name: request.body.name.toLowerCase(),
            emailid: request.body.emailid.toLowerCase(),
            password: request.body.password,
            confirmPassword: request.body.confirmPassword,
            imageURL: request.body.imageURL,
            isVerify: request.body.isVerify
        };
        console.log(userObject);
        const promise = userOperations.register(userObject);
        promise.then(
            (doc) => {
                response
                  .status(SUCCESS)
                  .json({ message: messageBundle["REGISTER.SUCCESS"], doc: doc });
            }
        ).catch(
            (err) => {
                response
                  .status(SERVER_ERROR)
                  .json({ message: messageBundle["REGISTER.FAIL"] });
            }
        );
    },
    login(request, response){
        // response.send("You are in Login URL");
    }
}
module.exports = userController; 