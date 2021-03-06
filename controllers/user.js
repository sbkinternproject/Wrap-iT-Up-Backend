const { SUCCESS, SERVER_ERROR, NOT_FOUND } =
  require("../utils/config").STATUS_CODES;
const messageBundle = require("../locales/en");
const userOperations = require("../db/services/user_crud");
const jwt = require("../utils/token");
const userController = {
    show(request, response) {
      response.send("U r on Show Section");
    },
    getRegister(request, response){
      // console.log(__dirname);
      var directory = __dirname;
      var directoryArray = directory.split('/');
      // console.log(directoryArray);
      // console.log(directoryArray.length);
      directoryArray.pop();
      // console.log(directoryArray);
      // var pathFinal = directoryArray.toString();
      var pathFinal = "";
      for(var i = 0 ;i < directoryArray.length;i++){
        pathFinal = pathFinal + directoryArray.at(i)+"/";
      }
      
      // console.log(pathFinal);
      response.sendFile(pathFinal+"public/getRequest.html");
    },
    getLogin(request, response){
      // console.log(__dirname);
      var directory = __dirname;
      var directoryArray = directory.split('/');
      // console.log(directoryArray);
      // console.log(directoryArray.length);
      directoryArray.pop();
      // console.log(directoryArray);
      // var pathFinal = directoryArray.toString();
      var pathFinal = "";
      for(var i = 0 ;i < directoryArray.length;i++){
        pathFinal = pathFinal + directoryArray.at(i)+"/";
      }
      
      // console.log(pathFinal);
      response.sendFile(pathFinal+"public/getRequest.html");
    },
    register(request, response){
        // response.send("You are on Register URL now");
        let userObject = {
            name: request.body.name.toLowerCase(),
            emailid: request.body.emailid.toLowerCase(),
            password: request.body.password,
            imageURL: request.body.imageURL,
            phoneNo: request.body.phoneNo,
            isVerify: request.body.isVerify,
            userType: request.body.userType
        };
        // console.log(userObject);
        const promise = userOperations.register(userObject);
        promise.then(
            (doc) => {
                response
                  .status(SUCCESS)
                  .json({ message: messageBundle["REGISTER.SUCCESS"],
                  name: doc.name,
                  emailid: doc.emailid,
                  imageURL: doc.imageURL,
                  phoneNo: doc.phoneNo,
                  isVerify: doc.isVerify,
                  userType: doc.userType
                });
            }
        ).catch(
            (err) => {
              // console.log(err);
                response
                  .status(SERVER_ERROR)
                  .json({ message: messageBundle["REGISTER.FAIL"] });
            }
        );
    },
    async login(request, response){
        // response.send("You are in Login URL");
        const user = request.body;
        try {
            const doc = await userOperations.login(user);
            if (doc) {
              // Generate a Token
              let token = jwt.generateToken(user.emailid);
              response
                .status(SUCCESS)
                .json({
                  message: messageBundle["LOGIN.SUCCESS"],
                  name: doc.name,
                  emailid: doc.emailid,
                  imageURL: doc.imageURL,
                  isVerify: doc.isVerify,
                  userType: doc.userType,
                  token: token,
                });
            } else {
              response
                .status(NOT_FOUND)
                .json({ message: messageBundle["LOGIN.INVALID"] });
            }
            // console.log("JSON is ", json);
        }catch (err) {
            // console.log(err);
        }
    }
}
module.exports = userController; 