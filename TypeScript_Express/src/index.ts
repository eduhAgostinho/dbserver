import express from 'express';

const app = express();

app.use(consoleLogger);

app.get('/', (req,res) => {
    res.send('Alô, Mundo!');
});

app.listen(3000, () => {console.log('Rodando na porta 3000...')});

// Introduzir exemplo de middleware
function consoleLogger(request: express.Request, response: express.Response, next: express.NextFunction) {
    console.log(`${request.method} ${request.path}`);
    next();
}