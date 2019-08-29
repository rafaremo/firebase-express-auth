require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const clientes = require('./routes/clientes');
const productos = require('./routes/productos');
app.use('/clientes', clientes);
app.use('/productos', productos);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});