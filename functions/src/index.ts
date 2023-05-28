const functions = require("firebase-functions");
const expresss = require("express");
const routess = require("./routes/index.js");
const {connectDb} = require("./db/index");
const bodyParser = require("body-parser");
const cors = require("cors"); 

const app = expresss();

app.get("/done", (request:any, response:any) => {
  response.end("success2");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(routess);

connectDb().then(async () => {
  app.listen();
});
exports.app = functions.https.onRequest(app);
