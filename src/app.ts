const expresss = require("express");
const routes = require("./routes/index");
const { connectDb } = require("./db/index");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = expresss();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

connectDb().then(async () => {
  app.listen(8080, () => console.log("Listening on http://localhost:8080"));
});
