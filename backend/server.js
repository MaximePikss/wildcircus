const express = require("express");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));

app.get("/", (req, res) => {
  res.send("Users ?");
});

app.listen(4000, () => {
  console.log("API disponible sur http://localhost:4000");
});
