const { Router } = require("express");
const getUsers = require("../controllers/getUsers");
const createUser = require("../controllers/createUsers");
const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
});

usersRouter.post("/", async (req, res) => {
  try {
    const { name, email, username } = req.body;

    const newUser = await createUser({
      name,
      email,
      username,
    });
    res.status(200).json({ created: "OK", newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
usersRouter.get("/:id", (req, res) => {
  res.send("Estoy en la ruta /:id, info de un usuario por id.");
});
module.exports = usersRouter;
