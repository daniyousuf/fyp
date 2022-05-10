const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env =require('dotenv');
const bodyParser = require("body-parser");
const userRoutes = require('./routes/user');
env.config();

var cors = require('cors')
const fiq= require("./routes/fiq")
const fbu= require("./routes/fbu")
const fiv = require("./routes/fbiv");
const feq = require('./routes/feq')
const fbp = require('./routes/fbp')
const predict = require('./routes/pred')
const chemical = require('./routes/chemical')
const df = require('./routes/df');
const req = require("express/lib/request");



app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose.connect(`mongodb+srv://admin:fypgroup12345@fyp-project.prdi7.mongodb.net/fyp?retryWrites=true&w=majority`,
  {

    useNewUrlParser: true,

    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully")
});

app.use(bodyParser.json());

app.use("/api",userRoutes);
app.use('/api/prediction', predict)
app.use('/api/chemicals', chemical)
app.use('/api/data', df)
app.use('/api/fbu', fbu)
app.use('/api/fiv', fiv)
app.use('/api/fbp', fbp)
app.use('/api/feq', feq)
app.use('/api/fiq', fiq)


app.listen(process.env.PORT || 7000, () => {
  console.log("Server is running at port 7000");
});