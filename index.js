const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const route = require("./src/routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

//route
route(app);

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
