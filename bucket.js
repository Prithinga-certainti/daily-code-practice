const express = require("express");
const app = express();
const userBuckets = {};

const MAX_TOKENS = 5;
const REFILL_TIME = 10000; 

function rateLimiter(req, res, next) {
  const userId = req.ip;

  if (!userBuckets[userId]) {
    userBuckets[userId] = {
      tokens: MAX_TOKENS,
      lastRefill: Date.now(),
    };
  }

  const bucket = userBuckets[userId];
  const now = Date.now();

  if (now - bucket.lastRefill >= REFILL_TIME) {
    bucket.tokens = Math.min(MAX_TOKENS, bucket.tokens + 1);
    bucket.lastRefill = now;
  }
  if (bucket.tokens > 0) {
    bucket.tokens--;
    next();
  } else {
    res.status(429).json({
      message: "Too many requests. Try again later.",
    });
  }
}

app.get("/api/data", rateLimiter, (req, res) => {
  res.json({ message: "You accessed protected data!" });
});

app.listen(3000, () => 
  console.log("Server running on port 3000")
);