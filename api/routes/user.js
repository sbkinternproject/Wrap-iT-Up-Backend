const express = require("express");
const router = express.Router();
// const { <functionName>, <functionName> } = require("../../controllers/user");
// const { LOGIN, REGISTER } = require("../../utils/config").ROUTES.USER;
// router.get(PROFILE, <functionName>);
// router.post(LOGIN, <functionName>);
const { show } = require("../../controllers/user");
const { SHOW } = require("../../utils/config").ROUTES.USER;
router.get(SHOW, show);
module.exports = router;