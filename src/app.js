import express from "express";
import postRouter from "./routers/post";

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
