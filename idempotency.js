const express = require("express");
const app = express();
app.use(express.json());

const store = {}; 
app.post("/pay", (req, res) => {
  const key = req.headers["idempotency-key"];

  if (!key) {
    return res.status(400).send("Idempotency key required");
  }
  if (store[key]) {
    return res.json(store[key]); 
  }
  const response = {
    message: "Payment successful",
    amount: req.body.amount
  };

  store[key] = response;

  res.json(response);
});

app.listen(3000);