const express = require('express')
const routes = require('./routes')

const app = express();

// Req.query = Acessar query params (para filtros)
// Req.params = Acessar route params (para edição, delete)
// Req.body = Acessar corpo da request (criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);   