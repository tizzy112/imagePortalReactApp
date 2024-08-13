//here we require our router from express
const { Router } = require("express");

const router = Router();
//here we require our controller
const {
  createUserPost,
  getAllUserPost,
  updateOneUserPost,
} = require("../controller/userController");

//here we define our routes
router.post("/create", createUserPost);
router.get("/all", getAllUserPost);
router.put("/update/:id", updateOneUserPost);

//here we export our router
module.exports = router;
