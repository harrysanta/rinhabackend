const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const { users } = require("./src/routes");

app.use("/users", users);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
