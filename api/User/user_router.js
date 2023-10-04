const { createUser } = require("./user_controller")
const router = require("express").Router()

router.post("/", createUser)
module.exports = router