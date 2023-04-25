const hotelsRouter = require("./hotels");

function route(app) {
  app.get("/", (req, res) => {
    res.send("<h1>Hello, this is GROUP 9<h1>");
  });

  app.use("/hotels", hotelsRouter);
}

module.exports = route;
