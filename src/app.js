import express from "express";

const app = express();

app.get("/", (req, res) => {
  const name = req.query.name || "Guest";
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  let message = `Hello, ${name}!`;

  if (!isNaN(a) && !isNaN(b)) {
    message += `\nSum of ${a} and ${b} is ${a + b}`;
  }

  res.send(message);
});

app.listen(3000, () => {
  console.log(" http://localhost:3000/?name=Ken&a=2&b=3");
});
