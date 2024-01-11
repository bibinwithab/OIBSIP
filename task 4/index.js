require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();

const rootRoutes = require('./routes/root')
const authRoutes = require("./routes/auth");
const secureRoutes = require("./routes/secure");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", express.static(path.join(__dirname, "public")));
app.use('/', rootRoutes)
app.use('/auth', authRoutes)
// app.use('/secure', secureRoutes)


app.listen(port, () => {
  console.log(`Server heard on  http://localhost:${port}`);
  mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Database connected");
  });
});
