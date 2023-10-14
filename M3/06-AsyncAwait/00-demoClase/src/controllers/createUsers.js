const data = require("../utils/data");

const createUser = async ({ name, email, username }) => {
  if (!name || !email || !username) throw new Error("Faltan datos.");
  const newUser = { name, email, username };
  data.push(newUser);
  return newUser;
};

module.exports = createUser;
