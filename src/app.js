import express from "express";
import postRouter from "./routers/post.js";
import mongoose from "mongoose";
import userRouter from "./routers/userRouters.js";

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
app.use("/api/users", userRouter), async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });

  if (userExists) {
    return res.status(400).json({ message: "Email already exists" });
  }
  req.body.password = await bcrypt.hash(req.body.password, 10);

  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
}




app.listen(3000, () => {
  console.log(" http://localhost:3000");
});
