// Input data
const to = [
  "prithii@gmail.com",
  "vel@gmail.com",
  "mathii@gmail.com",
  "bademail"
];

const cc = [
  "prithii@gmail.com",
  "vel@gmail.com",
  "wrong"
];

const uniqueTo = [...new Set(to)];
const uniqueCc = [...new Set(cc)];

function isValid(email) {
  return email.includes("@") && email.includes(".");
}

const validTo = uniqueTo.filter(email => isValid(email));
const invalidTo = uniqueTo.filter(email => !isValid(email));

const validCc = uniqueCc.filter(email => isValid(email));
const invalidCc = uniqueCc.filter(email => !isValid(email));

const finalCc = validCc.filter(email => !validTo.includes(email));

console.log("VALID TO:", validTo);
console.log("VALID CC:", finalCc);

console.log("INVALID TO:", invalidTo);
console.log("INVALID CC:", invalidCc);