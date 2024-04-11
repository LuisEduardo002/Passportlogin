
const express = require("express")
const userController =require("../controllers/user")
const router = express.Router()

router.post('/new-user', userController.createUser)

module.exports = router