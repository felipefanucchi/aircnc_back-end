const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:xablau@cluster0-qkr9k.mongodb.net/AirCnC?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Req.query = Acessar query params (para filtros)
// Req.params = Acessar route params (para edição, delete)
// Req.body = Acessar corpo da request (criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);
