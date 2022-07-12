const ProductModel = require("../models/product");
module.exports = {
    registerProduct(productObject) {
      let promise = ProductModel.create(productObject);
      return promise;
    },
    showAllProducts(){
      let promise = ProductModel.find({})
      return promise;
    },
    showProductsByCategory(category){
      let promise = ProductModel.find({category: category});
      return promise;
    }

}