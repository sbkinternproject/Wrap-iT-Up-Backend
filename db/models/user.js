const { Schema, SchemaTypes } = require("../connect");
const mongoose = require("../connect");
const { SCHEMAS } = require("../../utils/config");
const { SchemaType } = require("mongoose");
const userSchema = new Schema(
  {
    name: { type: SchemaTypes.String, required: true },
    emailid: { type: SchemaTypes.String, required: true, unique: true},
    password: { type: SchemaTypes.String, required: true, min: 8, max: 25 },
    confirmPassword: { type: SchemaTypes.String, required: true, min: 8, max: 25 },
    imageURL: {type: SchemaTypes.String, required: true, unique: true},
    isVerify: {type: SchemaTypes.Boolean, required: true}
  },
  { timestamps: true }
);
const UserModel = mongoose.model(SCHEMAS.USERS, userSchema);
module.exports = UserModel;