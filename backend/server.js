const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Nitin is working succesfully");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`server started on PORT ${PORT}`.yellow.bold));
