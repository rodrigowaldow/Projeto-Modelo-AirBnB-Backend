const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://developer:developer@air-0h8sh.mongodb.net/air?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// req.query = Acessar query params (filtro)
// req.params = Acessar route params (edição, delete)
// req.body = Acessar corpo da requisição (criação, edição)

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);