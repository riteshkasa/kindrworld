// import { Schema } from "mongoose";

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// const PORT = process.env.PORT || 5001;
// const MONGO_URI = process.env.MONGO_URI;

// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err: any) => console.error("MongoDB connection error:", err));

// app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
//   res.send("API is running...");
// });

// const dateSchema = new mongoose.schema({
//   user: String,
//   dates: Set,
// });

// const dm = mongoose.model("KindrWorldCalendar", dateSchema);

// export function updateStreak(username: String, datesList: Set<any>) {
//   dm.updateOne({ user: username, dates: datesList });
// }

// export function fetchData(username: string) {
//   return dm.find({ username }).exec();
// }
