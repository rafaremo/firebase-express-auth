const express = require('express');
const router  = express.Router();
const tokenChecker = require('../helpers/tokenChecker');

router.get('/', tokenChecker, (req, res) => {
    if(req.isAuth){
        res.send(req.user);

        //salvar cosas en base de datos
        
    } else {
        res.status(401).send('Necesitas estar autenticado');
    }
});

router.post('/', tokenChecker, (req, res) => {
    if(req.isAuth){
        res.send('Agregar Cliente');
    } else {
        res.status(401).send('Necesitas estar autenticado');
    }
});

module.exports = router;