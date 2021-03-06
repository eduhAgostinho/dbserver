import app from './app';
import {connect} from 'mongoose';

async function main() {
   try {
        //Conectar ao MongoDB
        const servidorMongo = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;
        await connect(servidorMongo, { useNewUrlParser: true });

        //Iniciar Express
        app.listen(app.get('port'), () => {
            console.log(`Express executando em http://localhost:${app.get('port')} no modo ${app.get('env')}`);
        });
   } catch (error) {
        console.log('Erro:');
        console.log(error);
   }
}
main();