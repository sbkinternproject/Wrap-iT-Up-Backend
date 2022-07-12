const { SUCCESS, SERVER_ERROR, NOT_FOUND } = require("../utils/config").STATUS_CODES;
const messageBundle = require("../locales/en");
const productOperations = require("../db/services/product_crud");
const userOperations = require("../db/services/user_crud");
const jwt = require("../utils/token");
const productController = {
    registerProduct(request, response){
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
                        message: messageBundle["PRODUCT.ALL.FAIL"]
                    }
                );
            }
        )
    }
}
module.exports = productController;