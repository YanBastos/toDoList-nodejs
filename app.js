const express = require('express'); //importando express
const checkListRouter = require('./src/routes/checklist');


const app = express(); // chamando express para o app, tendo tudo disponivel dentro dele
app.use(express.json());

app.use('/checklists' ,checkListRouter); //mostra que todas router é derivada de checklists


app.listen(3000, () => { //escutando a porta 3000 
    console.log('Servidor iniciado')
})

