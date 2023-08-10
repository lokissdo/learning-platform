const router = require("express").Router();
const userController = require("../controller/UserController");

router.get("/signup", userController.addUser);

module.exports = router;