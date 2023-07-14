const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Nitin is working succesfully");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //console.log(req.params.id);
  const singlechat = chats.find((c) => c._id === req.params.id);
  res.send(singlechat);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log("server started on PORT ${PORT}"));
