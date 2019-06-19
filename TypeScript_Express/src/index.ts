import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(consoleLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.send('Alô, Mundo!');
});

app.get('/:nome', (req,res) => {
    res.send(`Alô ${req.params.nome}`);
});

app.post('/', (req,res) => {
    const pessoa = req.body as {nome: string};
    res.send(`Alô ${pessoa.nome}`);
});

app.listen(3000, () => {console.log('Rodando na porta 3000...')});

// Introduzir exemplo de middleware
function consoleLogger(request: express.Request, response: express.Response, next: express.NextFunction) {
    console.log(`${request.method} ${request.path}`);
    next();
}