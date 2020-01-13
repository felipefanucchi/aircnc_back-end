const express = require('express')
const app = express();

// Req.query = Acessar query params (para filtros)
// Req.params = Acessar route params (para edição, delete)
// Req.body = Acessar corpo da request (criação, edição)

app.use(express.json());

app.post('/users/:id', (request, response) => {
    return response.json(request.body);
});

app.listen(3333);   