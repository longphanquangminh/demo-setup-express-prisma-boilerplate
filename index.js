import express from "express";
import ghpages from "gh-pages";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

ghpages.publish(
  "/",
  {
    branch: "master",
    repo: "https://github.com/longphanquangminh/demo-setup-npm-express-prisma-boilerplate.git",
  },
  function (err) {
    console.log(err);
  },
);
