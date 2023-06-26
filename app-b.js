// importar express
// chamar o express no app
    
// criar um rota da raiz/dominio do tipo get
// responder um h1 

//escutar a porta 3000, com aviso de servidor funcionando

const express = require('express'); //importando express

const app = express(); // chamando express para o app, tendo tudo disponivel dentro dele

//Middlewares

//Usando o middleware para verificar se qunado fizer a chamda web vai existir um json ali e 
//se deve processar deixando disponivel dentro do "body(req)"

app.use(express.json());


                        //next passa a requisição para oproximo middleware
const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next(); //passa para o proximo middleware 
}

app.use(log);

//ROTAS


app.get('/', (req, res) => { // criando rota do tipo get
    res.send('<h1> Minha lista de tarefas</h1>'); //enviando a resposta
})

app.get('/json', (req, res) => {
    console.log(req.body); // mostra no console  o json disponivel no nosso body, com middleware
    res.json({title: 'Resposta Json',name:' Yan Bastos', Tarefa: true });
})


app.listen(3000, () => { //escutando a porta 3000 
    console.log('Servidor iniciado')
})

