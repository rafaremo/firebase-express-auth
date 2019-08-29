const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de Productos');
});

router.post('/', (req, res) => {
    res.send('agregar producto');
});

module.exports = router;