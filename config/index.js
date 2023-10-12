const express = require("express");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

const cors = require("cors");
const path =require("path");
//const FRONTEND_URL = process.env.ORIGIN || "http://localhost:3000";



// Middleware configuration
module.exports = (app) => {
  app.set("trust proxy", 1);

  app.use(
    cors({
      origin: "http://localhost:5173", // this is the FRONTEND// multiple: []
    })
  );

  app.use(logger("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "..", "assets")));

};
