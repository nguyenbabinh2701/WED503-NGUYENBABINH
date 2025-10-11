import express from "express";
import postRouter from "./routers/post";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/nodejs")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

const app = express();

// Middleware tích hợp để parse JSON: req.body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("chao moi nguoi");
});

app.use("/posts", postRouter)





app.listen(3000, () => {
  console.log(" http://localhost:3000");
});
