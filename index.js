const express = require("express");

const app = express();

console.log("my express application is starting....");

app.listen(3000, () => {
  console.log("listening to port....");
});
