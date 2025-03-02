const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: any) => console.error("MongoDB connection error:", err));

app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("API is running...");
});

const user = mongoose.schema({
  user: String,
  password: String,
});

const login = mongoose.model("LoginInfo");

export function isValidUser(username: string, password: string) {
  var check = user.find({ username, password });
  return check;
}
