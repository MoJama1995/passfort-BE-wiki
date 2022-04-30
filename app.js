const express  = require("express");

const port = 3000;
const app = express();

const documentRouter  = require("./src/routes/documents.js");


//set port for app
app.listen(port, () => console.log(`Listening on ${port}`));

app.use("/documents", documentRouter);

// handle errors
app.use((error, _, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message });
  next();
});

module.exports = app;
