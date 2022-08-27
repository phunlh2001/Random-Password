const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const lowerWords = "qwertyuiopasdfghjklzxcvbnm";
const upperWords = "QWERTYUIOPASDFGHJKLZXCVBNM";

const words = lowerWords + upperWords;

/**
 * [GET] get random words with a number someone put to url
 */
app.get("/api/:number?", (req, res) => {
  console.log(req.params);
  let length = 6;
  if (req.params.number) {
    length = parseInt(req.params.number); //parser param to integer
  }
  let result = "";

  if (Number.isInteger(length) && length > 0) {
    for (let i = 0; i < length; i++) {
      result += words.charAt(Math.floor(Math.random() * words.length));
    }
    res.status(200).json({ msg: result });
  } else {
    res.status(400).json({ msg: "Only accept param is positive number" });
  }
});

app.listen(PORT, () =>
  console.log(`The program started on port http://localhost:${PORT}`)
);
