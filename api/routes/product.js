const express = require("express");
const router = express.Router();
const { registerProduct, showAllProducts, showProductByCategory } = require("../../controllers/product");
const { REGISTER , PRODUCTS, SHOWPRODUCTBYCATEGORY } = require("../../utils/config").ROUTES.PRODUCT;
router.post(REGISTER, registerProduct);
router.get(PRODUCTS, showAllProducts);
router.get(SHOWPRODUCTBYCATEGORY, showProductByCategory);
module.exports = router;