const { Router } = require("express");
const usersRouter = require("./usersRouter");
const postRouter = require("./postRouter");
const router = Router();

router.use("/users", usersRouter); 

router.use("/post", postRouter); 

module.exports = router;
