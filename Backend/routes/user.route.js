const express = require('express');
const router = express.Router();
const {createUser,login} = require("../controller/user.controller.js");

router.post("/create",createUser)
router.post("/login",login)


module.exports = router
  
