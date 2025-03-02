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

const commentSchema = new mongoose.schema({
  post: String,
  userName: String,
  comment: String,
  createdAt: { type: Date, default: Date.now },
});

const cm = mongoose.model("KindrWorldComments", commentSchema);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export function addData(post: string, userName: string, commentText: string) {
  const newComment = new cm({ post, userName, commentText });
  return newComment.save();
}

export function fetchData(post: string) {
  return cm.find({ post }).exec();
}

export function getIndivComment(commentArr: typeof cm, i: number) {
  return cm[i];
}
