const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const lowerWords = "qwertyuiopasdfghjklzxcvbnm";
const upperWords = "QWERTYUIOPASDFGHJKLZXCVBNM";

const words = lowerWords + upperWords;

app.get("/api", (req, res) => {
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += words.charAt(Math.floor(Math.random() * words.length));
  }
  res.status(200).json({ msg: `your words: ${result}` });
});

app.listen(PORT, () =>
  console.log(`The program started on port http://localhost:${PORT}`)
);
