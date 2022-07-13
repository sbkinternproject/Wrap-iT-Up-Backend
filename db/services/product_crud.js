const { updateProduct } = require("../../controllers/product");
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
    },
    deleteProduct(image){
      let promise = ProductModel.deleteOne({image: image});
      return promise;
    },
    updateProduct(image, productObject){
      let promise = ProductModel.updateOne({
        image: image
      },{
          name: productObject.name,
          description: productObject.description,
          price: productObject.price,
          category: productObject.category
      });
      return promise;
    }

}