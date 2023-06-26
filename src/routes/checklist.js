const express = require('express');

const router = express.Router(); // freeamenta do express que permite criar varias rotas em arquivos 
                                 // diferentes e depois utilizar no app js

router.get('/', (req, res) => {
    console.log('Olá!');
    res.send();
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`ID: ${req.params.id}`);
}) // mostramos que esse get é para um ID

module.exports = router; // usamos o exports para exporta a rota