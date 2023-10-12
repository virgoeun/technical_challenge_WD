require("dotenv").config();

//require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const phoneRouter = require("./routes/phone.routes");
app.use("/api", phoneRouter);

require("./error-handling")(app);

module.exports = app;