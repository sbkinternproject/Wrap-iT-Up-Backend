const { SUCCESS, SERVER_ERROR, NOT_FOUND } = require("../utils/config").STATUS_CODES;
const messageBundle = require("../locales/en");
const productOperations = require("../db/services/product_crud");
const userOperations = require("../db/services/user_crud");
const jwt = require("../utils/token");
const productController = {
    async registerProduct(request, response){
        let token = request.get('Authorization');
        // console.log(token);
        var out = productController.checkWhetherItsAdmin(token);
        // console.log(out);
        if(!productController.responseOnBasisOfOutput(out, response)){
            return;
        }else {
            var userType = await productController.itsAdmin(token);
            if( userType == "User"){
                response
                .status(SERVER_ERROR)
                .json(
                    {
                        message: messageBundle["USER.ADMIN.NOT"]
                    }
                )
                return;
            }
            // console.log(productController.itsAdmin(token)); 
        }
        let productObject = {
            image: request.body.image,
            name: request.body.name.toLowerCase(),
            description: request.body.description,
            price: request.body.price,
            category: request.body.category
        };
        const promise = productOperations.registerProduct(productObject);
        promise.then(
            (doc)=>{
                response
                .status(SUCCESS)
                .json(
                    {
                        message: messageBundle["PRODUCT.REGISTER.SUCCESS"],
                        image: doc.image,
                        name: doc.name.toUpperCase(),
                        description: doc.description.toUpperCase(),
                        price: doc.price,
                        category: doc.category.toLowerCase()
                    }
                );
            }
        ).catch(
            (err)=>{
                response
                .status(SERVER_ERROR)
                .json(
                    {
                        message: messageBundle["PRODUCT.REGISTER.FAIL"]
                    }
                );
            }
        )
    },
    showAllProducts(request, response){
        const promise = productOperations.showAllProducts();
        promise.then(
            (doc)=>{
                response
                .status(SUCCESS)
                .json(
                    {
                        message: messageBundle["PRODUCT.ALL"],
                        products: doc
                    }
                );
            }
        ).catch(
            (err)=>{
                response
                .status(SERVER_ERROR)
                .json(
                    {
                        message: messageBundle["PRODUCT.ALL.FAIL"]
                    }
                );
            }
        )
    },
    showProductByCategory(request, response){
        const category = request.params.category.toLowerCase();
        const promise = productOperations.showProductsByCategory(category);
        promise.then(
            (doc)=>{
                response
                .status(SUCCESS)
                .json(
                    {
                        message: messageBundle["PRODUCT.CATEGORY.ALL"],
                        products: doc
                    }
                );
            }
        ).catch(
            (err)=>{
                response
                .status(SERVER_ERROR)
                .json(
                    {
                        message: messageBundle["PRODUCT.CATEGORY.FAIL"]
                    }
                );
            }
        )
    },
    async deleteProduct(request, response){
        let token = request.get('Authorization');
        // console.log(token);
        var out = productController.checkWhetherItsAdmin(token);
        // console.log(out);
        if(!productController.responseOnBasisOfOutput(out, response)){
            return;
        }else {
            var userType = await productController.itsAdmin(token);
            if( userType == "User"){
                response
                .status(SERVER_ERROR)
                .json(
                    {
                        message: messageBundle["USER.ADMIN.NOT"]
                    }
                )
                return;
            }
            // console.log(productController.itsAdmin(token)); 
        }
        const image = request.params.product;
        // console.log(image);
        const promise = productOperations.deleteProduct(image);
        promise.then(
            (doc)=>{
                response
                .status(SUCCESS)
                .json(
                    {
                        message: messageBundle["PRODUCT.DELETE.SUCCESS"],
                        deletedCount: doc.deletedCount
                    }
                );
            }
        ).catch(
            (err)=>{
                response
                .status(SERVER_ERROR)
                .json(
                    {
                        message: messageBundle["PRODUCT.DELETE.FAIL"]
                    }
                );
            }
        )
    },
    async updateProduct(request, response){
        let token = request.get('Authorization');
        // console.log(token);
        var out = productController.checkWhetherItsAdmin(token);
        // console.log(out);
        if(!productController.responseOnBasisOfOutput(out, response)){
            return;
        }else {
            var userType = await productController.itsAdmin(token);
            if( userType == "User"){
                response
                .status(SERVER_ERROR)
                .json(
                    {
                        message: messageBundle["USER.ADMIN.NOT"]
                    }
                )
                return;
            }
            // console.log(productController.itsAdmin(token)); 
        }
        // console.log("###");
        const image = request.params.product;
        let productObject = {
            image: image,
            name: request.body.name.toLowerCase(),
            description: request.body.description,
            price: request.body.price,
            category: request.body.category
        };
        const promise = productOperations.updateProduct(image, productObject);
        promise.then(
            (doc)=>{
                response
                .status(SUCCESS)
                .json(
                    {
                        message: messageBundle["PRODUCT.UPDATE.SUCCESS"],
                        modifiedCount: doc.modifiedCount
                    }
                );
            }
        ).catch(
            (err)=>{
                response
                .status(SERVER_ERROR)
                .json(
                    {
                        message: messageBundle["PRODUCT.UPDATE.FAIL"]
                    }
                );
            }
        )
    },
    checkWhetherItsAdmin(token){
        if(token == undefined){
            return messageBundle["AUTH.NOTOKEN"];
        }else if(!jwt.verifyToken(token)){
            return messageBundle["AUTH.TOKEN.EXPIRED"];
        }
        return messageBundle["AUTH.TOKEN.SUCCESS"];
    },
    responseOnBasisOfOutput(out, response){
        if(out == messageBundle["AUTH.NOTOKEN"]){
            response.status(SUCCESS).json({
                message: out
            });
            return false;
        }else if(out == messageBundle["AUTH.TOKEN.EXPIRED"]){
            response.status(SUCCESS).json({
                message: out
            });
            return false;
        }
        return true;
    },
    async itsAdmin(token){
        //Check Whether now its admin or not
        var emailid = jwt.getTokenDetails(token);
        // console.log(emailid);
        var userType = await userOperations.getUserType(emailid);
        // console.log(userType.userType);
        // if(userType.userType == "Admin"){
        //     return true;
        // }else if(userType.userType == "User"){
        //     return false;
        // }
        return userType.userType;
    }
}
module.exports = productController;