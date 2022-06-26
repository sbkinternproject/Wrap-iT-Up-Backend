// This is App.js 
const express = require("express");
const mongoose = require('./db/connect');
const cors = require("cors");
const res = require("express/lib/response");
const app = express(); // express function and it return an app fn
app.use(express.static("public"));
require("dotenv").config();
app.use(express.json()); // {key:value}
app.use(express.urlencoded()); // key=value&key=value


const server = app.listen(process.env.PORT || 1234, (err) => {
  if (err) {
    console.log("App Crash ", err);
  } else {
    console.log("Server Started... ", server.address().port);
  }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
})