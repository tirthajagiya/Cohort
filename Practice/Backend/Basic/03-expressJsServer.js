const express = require("express");

const app = express();

app.use(express.json());

app.get("/menu", (req, res) => {
  res.json({
    items: ["chai", "coffee"],
  });
});

app.post("/order", (req, res) => {
  res.status(200).json({
    status: "received",
    order: req.body,
  });
});

app.listen(3000, () => {
  console.log("Server is stared on PORT : 3000");
});