import express from "express";
import postRouter from "./routers/post.js";
import mongoose from "mongoose";
import userRouter from "./routers/userRouters.js";
import authRouter from "./routers/authRouter.js";
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

app.use("/api/posts", postRouter);
app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)



app.listen(3000, () => {
  console.log(" http://localhost:3000");
});
