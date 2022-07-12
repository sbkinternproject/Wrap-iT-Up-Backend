const ProductModel = require("../models/product");
module.exports = {
    registerProduct(productObject) {
      let promise = ProductModel.create(productObject);
      return promise;
    }
}