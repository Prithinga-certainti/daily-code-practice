const express = require("express");
const app = express();

app.use(express.json());

function processEmails(to, cc) {
  let validTo = [];
  let validCc = [];
  let invalidEmails = [];

  function isValid(email) {
    return email.includes("@") && email.includes(".");
  }

  to = [...new Set(to)];
  cc = [...new Set(cc)];

  for (let email of to) {
    if (isValid(email)) {
      validTo.push(email);
    } else {
      invalidEmails.push(email);
    }
  }

  for (let email of cc) {
    if (!isValid(email)) {
      invalidEmails.push(email);
    } else if (!validTo.includes(email)) {
      validCc.push(email);
    }
  }

  return {
    validTo,
    validCc,
    invalidEmails
  };
}
app.post("/emails", (req, res) => {
  const { to, cc } = req.body;
  const result = processEmails(to, cc);
  res.json(result);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});