const mongoose = require("mongoose");

const messsageModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    Chat: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);
const Message = mongoose.model("Message", messsageModel);

module.exports = mongoose;
