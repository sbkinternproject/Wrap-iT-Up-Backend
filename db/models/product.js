const { Schema, SchemaTypes } = require("../connect");
const mongoose = require("../connect");
const { SCHEMAS } = require("../../utils/config");
const { SchemaType } = require("mongoose");
const productSchema = new Schema(
  {
    image: { type: SchemaTypes.String, required: true, unique: true },
    name: { type: SchemaTypes.String, required: true },
    description: { type: SchemaTypes.String, required: true},
    price: { type: SchemaTypes.Number, required: true},
    category: {type: SchemaTypes.String, required: true}
  },
  { timestamps: true }
);
const ProductModel = mongoose.model(SCHEMAS.PRODUCTS, productSchema);
module.exports = ProductModel;